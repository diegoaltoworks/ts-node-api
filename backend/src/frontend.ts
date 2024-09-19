import path from 'path';
import type {Request, Response} from 'express';

import next from 'next';
import type {RequestHandler} from 'next/dist/server/next';
type NextHandler = RequestHandler | null;

const dev = process.env.NODE_ENV !== 'production';
const dir = path.join(__dirname, '../../frontend');
console.log('### Next.js frontend starting', {dev, dir});
const nextApp = next({dev, dir}); // Initialize Next.js frontend with the correct directory

let handler: NextHandler = null;

export const init = (async () => {
  await nextApp.prepare(); // Wait for Next.js frontend to initialize (in prod, it serves from .next/)
  handler = nextApp.getRequestHandler(); // Set the proxy to use Next.js frontend
  console.log('### Next.js frontend is ready!');
  return nextApp;
})();

export const router = async (req: Request, res: Response) => {
  if (handler) {
    console.log('### Next.js frontend', req.method, req.url);
    await handler(req, res);
  } else {
    console.log('### Next.js frontend is not ready', req.url);
    res.send('Starting up frontend...');
    //TODO: print wait message and auto refresh
  }
};

export default router;
