import express from 'express';
import cors from 'cors';
import type {Express} from 'express';
//import 'express-async-errors'; // not needed
import {expressErrorHandler} from '@/lib/errorHandlers';
import trpcPanelRouter from '@/panel';
import trpcRestApiExpressRouter from '@/api';
import trpcOpenApiRouter from '@/trpc/openapi';
import trpcOpenApiJson from '@/trpc/openapi.json';
import docsRouter from '@/docs';
import sampleRouter from '@/sample';
import contentRouter from '@/content';

const app: Express = express();
app.use(cors());

// ---
// add custom routes here
//
//
// ---

// tRPC procedure routes
app.use('/trpc', trpcRestApiExpressRouter);

// tRPC REST routes (with trpc-openapi)
app.use('/api', trpcOpenApiRouter);

// openapi docs
app.use('/docs', docsRouter);

// tRPC panel
app.use('/panel', trpcPanelRouter);

// tRPC REST routes (with trpc-openapi)
app.use(trpcOpenApiJson);

// sample routes
app.use('/sample', sampleRouter);

// content routes
app.use('/', contentRouter);

// throw errors or catch them and forward them to `next: NextFunction`
app.use(expressErrorHandler);

export default app;
