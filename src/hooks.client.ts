import * as Sentry from "@sentry/sveltekit";

Sentry.init({
    dsn: "https://bfc0e22ccd9a80a57e72798b05156347@o4505632766951424.ingest.us.sentry.io/4508415106678784",
    tracesSampleRate: 0.25,

    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.01,

    // If the entire session is not sampled, use the below sample rate to sample
    // sessions when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // If you don't want to use Session Replay, just remove the line below:
    integrations: [
        Sentry.replayIntegration(),
        Sentry.captureConsoleIntegration(),
        Sentry.httpClientIntegration({ failedRequestStatusCodes: [[500, 599]] }),
    ],
    release: "node-20-sentry-demo@0.0.1",
    enabled: true,
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = Sentry.handleErrorWithSentry();
