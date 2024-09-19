import appRouter from '@backend/trpc/appRouter';
import {createContext} from '@backend/trpc/context';
import {createExpressMiddleware} from '@trpc/server/adapters/express';

const router = createExpressMiddleware({
  router: appRouter,
  createContext,
});

export default router;
