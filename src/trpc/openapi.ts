import appRouter from './appRouter';
import {createContext} from './context';
import {createOpenApiExpressMiddleware} from 'trpc-openapi';

const router = createOpenApiExpressMiddleware({
  router: appRouter,
  createContext,
});

export default router;
