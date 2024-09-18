import express from 'express';
import type {Express} from 'express';
//import 'express-async-errors'; // not needed
import {expressErrorHandler} from '@/lib/errorHandlers';
import trpcPanelRouter from '@/trpc/panel';
import trpcExpressRouter from '@/trpc/express';
import trpcOpenApiRouter from '@/trpc/openapi';
import trpcOpenApiJson from '@/trpc/openapi.json';
import sampleRouter from '@/sample';
import contentRouter from '@/content';

const app: Express = express();

// add routes here
//
//
// ---

// trpc panel
app.use('/trpc/panel', trpcPanelRouter);

// trpc api routes
app.use('/trpc', trpcExpressRouter);

// trpc REST routes (with trpc-openapi)
app.use('/api', trpcOpenApiRouter);

// trpc REST routes (with trpc-openapi)
app.use(trpcOpenApiJson);

// sample routes
app.use('/sample', sampleRouter);

// content routes
app.use('/', contentRouter);

// throw errors or catch them and forward them to `next: NextFunction`
app.use(expressErrorHandler);

export default app;
