import { sequence } from "@sveltejs/kit/hooks";
import * as Sentry from "@sentry/sveltekit";
import { type Handle } from "@sveltejs/kit";

Sentry.init({
    dsn: "https://bfc0e22ccd9a80a57e72798b05156347@o4505632766951424.ingest.us.sentry.io/4508415106678784",
    tracesSampleRate: 1.0,
    integrations: [Sentry.consoleIntegration(), Sentry.captureConsoleIntegration({ levels: ["error"] })],
    enabled: true,
});

const sessionCookieInvalidationHandle: Handle = async ({ event, resolve }) => {
    return resolve(event);
};

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(Sentry.sentryHandle(), sessionCookieInvalidationHandle);

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = Sentry.handleErrorWithSentry();
