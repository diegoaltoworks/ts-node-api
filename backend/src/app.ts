import express from 'express';
import cors from 'cors';
import type {Express} from 'express';
import {expressErrorHandler} from '@backend/lib/errorHandlers';
import trpcPanelRouter from '@backend/trpc/panel';
import trpcOpenApiJson from '@backend/trpc/openapi.json';
import trpcOpenApiRouter from '@backend/trpc/openapi';
import trpcRestRouter from '@backend/trpc/rest';
import trpcDocsRouter from '@backend/trpc/docs';
import sampleRouter from '@backend/sample';
import contentRouter from '@backend/content';
import frontendRouter from '@backend/frontend';

const app: Express = express();
app.use(cors());

// ---
// add custom routes here
//
//
// ---

// tRPC procedure routes
app.use('/trpc', trpcRestRouter);

// tRPC REST routes (with trpc-openapi)
app.use('/api', trpcOpenApiRouter);

// openapi docs
app.use('/docs', trpcDocsRouter);

// tRPC panel
app.use('/panel', trpcPanelRouter);

// tRPC REST routes (with trpc-openapi)
app.use(trpcOpenApiJson);

// sample routes
app.use('/sample', sampleRouter);

// content routes
app.use('/', contentRouter);

// Proxy middleware to intercept requests
app.get('*', frontendRouter);

// throw errors or catch them and forward them to `next: NextFunction`
app.use(expressErrorHandler);

export default app;
