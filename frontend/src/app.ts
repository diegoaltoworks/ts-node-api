import express from 'express';
import cors from 'cors';
import type {Express} from 'express';
import {expressErrorHandler} from '@backend/lib/errorHandlers';
import * as frontend from '@backend/frontend';

const app: Express = express();
app.use(cors());

export const init = frontend.init;
export const router = frontend.router;

// Proxy middleware to intercept requests
app.get('*', frontend.router);

// throw errors or catch them and forward them to `next: NextFunction`
app.use(expressErrorHandler);

export default app;
