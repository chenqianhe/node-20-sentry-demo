import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { sentrySvelteKit } from "@sentry/sveltekit";
import { loadEnv } from "vite";
import ViteRestart from "vite-plugin-restart";

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd(), ["local", ""]) };
    /**
     * This port configurate is for development only.
     * For production, use `vite build && node build` to host.
     */
    const httpsKey = process.env.HTTPS_KEY;
    const httpsCert = process.env.HTTPS_CERT;
    const httpsConfig =
        (httpsCert &&
            httpsKey && {
                key: httpsKey,
                cert: httpsCert,
            }) ||
        undefined;
    const serverPort = Number(process.env.PORT) || (httpsConfig ? 443 : 5173);
    return {
        server: {
            port: serverPort,
            host: "0.0.0.0",
            https: httpsConfig,
        },
        plugins: [
            sentrySvelteKit({
                autoUploadSourceMaps: false,
                sourceMapsUploadOptions: {
                    org: "learnie-ai",
                    project: "learnie-sveltekit",
                    authToken: process.env.SENTRY_AUTH_TOKEN,
                },
            }),
            sveltekit(),
            ViteRestart({ restart: [".env.local"] }),
        ],
        test: {
            env: {
                OPENMETER_API_KEY: "openmeter-api-key",
            },
            include: ["src/**/*.{test,spec}.{js,ts}"],
            coverage: {
                reporter: ["text", "json-summary", "json"],
            },
        },
        resolve: {
            alias: {
                "@api": "/src/routes/api",
                "@admin": "/src/routes/(app)/admin",
                "@app": "/src/routes/(app)",
            },
        },
    };
});
