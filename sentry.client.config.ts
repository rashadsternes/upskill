import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://af59e29d65150c008ee78a66b0d35d9c@o4510134221406208.ingest.us.sentry.io/4510134229991424",
  sendDefaultPii: true,
  integrations: [
    // Session Replay
    Sentry.replayIntegration(),
    // User Feedback
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  enableLogs: true,
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Optionally, export router transition instrumentation
// export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
