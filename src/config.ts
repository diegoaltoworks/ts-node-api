import {cleanEnv, str, num} from 'envalid';

// Define your environment variables and their types
const env = cleanEnv(process.env, {
  NODE_ENV: str({
    devDefault: 'development',
    choices: ['development', 'test', 'production', 'staging'],
  }),
  SENTRY_ORG: str({default: ''}),
  SENTRY_PROJECT: str({default: ''}),
  SENTRY_AUTH_TOKEN: str({default: ''}),
  SENTRY_DSN: str({default: ''}),
  PORT: num({default: 3000}),
  APIKEY: str({default: ''}),
  DATABASE_URL: str({
    default: '',
    devDefault: 'mongodb://localhost:27017/myapp',
  }),
});

// Export the validated environment variables
export const config = {
  // return them all with the same names
  ...env,

  // rename any if you like
  apiKey: env.APIKEY,
  port: env.PORT,
  databaseUrl: env.DATABASE_URL,
};

/*
Envalid checks for NODE_ENV automatically, and provides the following
shortcut (boolean) properties for checking its value:
  env.isProduction // true if NODE_ENV === 'production'
  env.isTest // true if NODE_ENV === 'test'
  env.isDev // true if NODE_ENV === 'development'
*/

export default config;
