// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from '@sentry/node';
import {nodeProfilingIntegration} from '@sentry/profiling-node';

(() => {
  if (!process.env.SENTRY_DSN) {
    console.warn('Sentry is not configured');
    return;
  }
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    includeLocalVariables: true,
    environment: process.env.NODE_ENV,
    integrations: [
      nodeProfilingIntegration(),
      Sentry.httpIntegration(),
      Sentry.nativeNodeFetchIntegration(),
      Sentry.captureConsoleIntegration({
        levels: [
          //'log',
          //'info',
          'warn',
          'error',
          'debug',
          'assert',
        ],
      }),
      //Sentry.onUncaughtExceptionIntegration({exitEvenIfOtherHandlersAreRegistered: false}),
      //Sentry.onUnhandledRejectionIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions

    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1.0,
  });
})();
