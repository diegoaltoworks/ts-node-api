import appRouter from '@/trpc/appRouter';
import {createContext} from '@/trpc/context';
import {createExpressMiddleware} from '@trpc/server/adapters/express';

const router = createExpressMiddleware({
  router: appRouter,
  createContext,
});

export default router;
