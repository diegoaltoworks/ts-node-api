import {cleanEnv, str, num} from 'envalid';
import * as path from 'path';
import * as fs from 'fs';

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const PackageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// Define your environment variables and their types
const env = cleanEnv(process.env, {
  PROJECT_NAME: str({default: PackageJson.name}),
  PROJECT_VERSION: str({default: PackageJson.version}),
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
  PROJECT_URL: str({default: PackageJson.homepage}),
  JWT_SECRET: str({default: '', devDefault: 'super-secret-goes-here'}),
  JWT_TEST_TOKEN: str({
    default: '',
    devDefault:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjYiLCJuYW1lIjoiVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.lLQY2Zv1ww8GwvC-UTVpRKlevFuZEXBL6anBgMGHfJE',
  }),
  DATABASE_URL: str({
    default: '',
    devDefault: 'mongodb://localhost:27017/myapp',
  }),
});

// Define PROJECT_URL with a dynamic default that refers to the validated PORT
const PROJECT_URL = env.PROJECT_URL || `http://localhost:${env.PORT}`;

// Export the validated environment variables
export const config = {
  // return them all with the same names
  ...env,

  // add base url with dynamic default from given port number
  PROJECT_URL,

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
