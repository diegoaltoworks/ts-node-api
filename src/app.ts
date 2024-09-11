import express from 'express';
import type {Express} from 'express';
//import 'express-async-errors'; // not needed
import sample from '@/sample/setup';
import content from '@/misc/content';
import {expressErrorHandler} from '@/lib/errorHandlers';

const app: Express = express();

// add routes here
//
//
// ---

// sample routes
app.use(sample.path, sample.router);

// content routes
app.use(content.path, content.router);

// throw errors or catch them and forward them to `next: NextFunction`
app.use(expressErrorHandler);

export default app;
