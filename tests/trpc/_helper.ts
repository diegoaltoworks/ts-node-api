import appRouter from '@/trpc/appRouter';
import {createCallerFactory} from '@/trpc/trpc';
import {Context} from '@/trpc/context';

export const createCallerContext = (ctx: Context) => {
  const callerCreator = createCallerFactory(appRouter);
  const caller = callerCreator(ctx);
  return caller;
};

export const createPublicCaller = () => createCallerContext({user: null});

export const createProtectedCaller = () =>
  createCallerContext({
    user: {id: '666', name: 'tester'},
  });
