import {initTRPC, TRPCError} from '@trpc/server';
import {OpenApiMeta} from 'trpc-openapi';
import type {Context} from './context';

const t = initTRPC.meta<OpenApiMeta>().context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
export const privateProcedure = t.procedure.use(async ({ctx, next}) => {
  if (!ctx.user) {
    // ❌ user is not authenticated
    throw new TRPCError({code: 'UNAUTHORIZED'});
  }
  // ✅ user is authenticated, carry on
  return next();
});
