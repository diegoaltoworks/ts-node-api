# Builder
# ---
FROM node:22 AS build-environment
WORKDIR /opt/app

COPY package*.json ./

# install all packaged needed for build
RUN npm install --omit optional
# copy all files that are explicitly needed for build (see .dockerignore)
COPY . .
# build the app
RUN npm run build
# remove all packages and install only production dependencies
RUN rm -rf node_modules && npm i --production --ignore-scripts

# Runner
# ---
FROM gcr.io/distroless/nodejs22-debian12 AS production-environment

COPY --from=build-environment /opt/app /opt/app
WORKDIR /opt/app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
ENV PATH=/opt/node_app/node_modules/.bin:$PATH

#ENTRYPOINT ["node","dist/index.js"]
# distroless start command:
CMD ["dist/index.js"]
