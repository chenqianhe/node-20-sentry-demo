import { json, type RequestEvent } from "@sveltejs/kit";
import type { FromSchema, JSONSchema } from "json-schema-to-ts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RequestEventAny = RequestEvent<any, any>;
const BusinessErrorCode = 422;

export class BusinessError extends Error {
    readonly code: number;

    constructor(message: string, code = -1) {
        super(message);
        this.name = "BusinessError";
        this.code = code;
    }

    toJsonResponse() {
        return json(
            { message: this.message, code: this.code },
            {
                status: BusinessErrorCode, // Unprocessable Content
            }
        );
    }
}

export type ApiSchemaReturnValue<
    T extends {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fetch: (...args: any) => Promise<any>;
    }
> = Exclude<Awaited<ReturnType<T["fetch"]>>, BusinessError>;

export type ApiSchemaType = "json-schema" | "ts-schema";

type ToSchemaType<T extends TYPE extends "json-schema" ? JSONSchema : object, TYPE extends ApiSchemaType> = TYPE extends "json-schema"
    ? FromSchema<T>
    : T;

/**
 * master of for API definition.
 *
 * This class builds a bridge between the server and the client to make sure that the request and response are both type-safe.
 *
 * The `IN` and `OUT` are JSONSchema objects that define the request and response body of the API.
 *
 * The `path` is the URL path of the API.
 */
export class ApiSchema<
    const IN extends INPUT_SCHEMA_TYPE extends "json-schema" ? JSONSchema : object,
    const OUT extends OUTPUT_SCHEMA_TYPE extends "json-schema" ? JSONSchema : object,
    INPUT_SCHEMA_TYPE extends ApiSchemaType = "json-schema",
    OUTPUT_SCHEMA_TYPE extends ApiSchemaType = "json-schema"
> {
    readonly path: string;
    readonly requestValidate;

    constructor(
        path: string,
        requestSchemaValidate: (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data: any,
            {
                instancePath,
                parentData,
                parentDataProperty,
                rootData,
            }?: {
                instancePath?: string | undefined;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                parentData: any;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                parentDataProperty: any;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                rootData?: any;
            }
        ) => boolean
    ) {
        this.path = path;
        this.requestValidate = requestSchemaValidate;
    }

    /**
     * Builds a SvelteKit API POST request handler, which validates the request body and calls the `handle` function.
     *
     * Any thrown `BusinessError` will be caught and reflected in the response.
     */
    buildPostApi(
        handle: (requestBody: ToSchemaType<IN, INPUT_SCHEMA_TYPE>, request: RequestEvent) => Promise<ToSchemaType<OUT, OUTPUT_SCHEMA_TYPE>>
    ): (event: RequestEventAny) => Response | Promise<Response> {
        return async (event: RequestEventAny) => {
            const jsonObj = await event.request.json();

            if (!this.requestValidate(jsonObj)) {
                return json({ error: "Invalid request body" }, { status: 400 });
            }

            try {
                const response = (await handle(jsonObj as ToSchemaType<IN, INPUT_SCHEMA_TYPE>, event)) as unknown; // cast to unknown to avoid infinite type-inferrence loop
                return json(response);
            } catch (e) {
                if (e instanceof BusinessError) {
                    return e.toJsonResponse();
                } else {
                    throw e;
                }
            }
        };
    }

    async mFetch(body: ToSchemaType<IN, INPUT_SCHEMA_TYPE>): Promise<ToSchemaType<OUT, OUTPUT_SCHEMA_TYPE> | BusinessError> {
        const untyped = body as unknown;
        const response = await fetch(this.path, {
            method: "POST",
            body: JSON.stringify(untyped),
        });

        if (response.status === BusinessErrorCode) {
            return new BusinessError((await response.json()).message, response.status);
        }

        if (response.status === 401) {
            console.warn("Unauthorized API access at", this.path);
            return new BusinessError("You are not authorized to perform this action.", response.status);
        }

        if (response.status !== 200) {
            console.error(`API error at ${this.path}`, response.status, response.statusText);
            return new BusinessError("Something went wrong... Please try again after a few seconds.", response.status);
        }

        return await response.json();
    }
}

export type ApiResponseDataType<T extends ApiSchema<JSONSchema, JSONSchema>> = Exclude<Awaited<ReturnType<T["fetch"]>>, BusinessError>;

export const Test2 = new ApiSchema<
    {
        type: "string";
    },
    {
        type: "string";
    }
>("/api/test2", () => true);
