import {initTRPC, TRPCError} from '@trpc/server';
import {OpenApiMeta} from 'trpc-openapi';
import type {Context} from './context';

const t = initTRPC.meta<OpenApiMeta>().context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
export const privateProcedure = t.procedure.use(
  async function isAuthenticated(opts) {
    const {ctx} = opts;
    if (!ctx.user) {
      // ❌ user is not authenticated
      throw new TRPCError({code: 'UNAUTHORIZED'});
    }
    return opts.next({
      ctx: {
        // ✅ user value is known to be non-null now
        user: ctx.user,
        // ^?
      },
    });
  }
);
