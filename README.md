# ts-node-api

Yet another ts boilerplate.

My aim was to create something,

- simple and flexible
- maximum reusability
- minimal configuration
- with as few dependencies as possible

# Features

TODO: describe

- env: dotenvx
- dev: pm2 and tsx
- test: vitest
- build: tsc
- docker: build & deploy
- gcloud: build & deploy

# Development

TODO: description of features

TODO: environment config

- use .env.local with dotenvx
- dynamic secret loader with local dev key from [Secret Manager](https://console.cloud.google.com/security/secret-manager)

# Testing

TODO: description of dev environment and features
TODO: testing with github actions

# Build & Deploy

## Deploy to docker

Dockerfile included, modify as needed.
The following commands are included for convenience, modify as needed.

- npm run docker:build
- npm run docker:start

## Deploy to Google Cloud Platform

The following commands are included for convenience, modify as needed.

- npm run gcloud:build
- npm run gcloud:deploy

Recommended steps

- Use [Secret Manager](https://console.cloud.google.com/security/secret-manager) to store environment variables
- Create a [service account](https://console.cloud.google.com/iam-admin/serviceaccounts) with the necessary permissions
  - grant this account
    - secret manager secret acessor
    - cloud run user
    - service account user

`npm run gcloud:deploy` will load the secrets directly to the cloud run service.

## Deploy from github action to Google Cloud Platform

TODO: testing with github actions

# Stack

- [typescript](https://www.typescriptlang.org/)
- [gts](https://github.com/google/gts) ([eslint](https://github.com/eslint/eslint) / [prettify](https://github.com/prettier/prettier) without [bikeshedding](https://lloydmelnick.com/2020/06/17/how-to-avoid-meetings-about-the-trivial-aka-bikeshedding/))
- [express](https://expressjs.com/)
- [pm2](https://pm2.keymetrics.io/)
- [zod](https://github.com/colinhacks/zod)
- [vitest](https://github.com/vitejs/vite)
- [supertest](https://github.com/visionmedia/supertest)
- [docker](https://www.docker.com/)
- [winston](https://github.com/winstonjs/winston)
- [sentry](https://sentry.io/)
- [newrelic](https://newrelic.com/)

# Inspiration

TODO: give credit to helpful packages and content creators

# even more TODO

- actually complete this readme.
- sample schemas
- zod to openapi generation
- openapi to docs generation
