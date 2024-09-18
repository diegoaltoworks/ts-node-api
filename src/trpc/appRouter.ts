import {router} from '@/trpc/trpc';
import {hello} from '@/trpc/routers/hello';
import {user} from './routers/user';

const appRouter = router({
  hello,
  user,
  // .. all your routes
});

export default appRouter;
export type AppRouter = typeof appRouter;
