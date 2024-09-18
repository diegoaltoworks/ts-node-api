import {TRPCError} from '@trpc/server';
import {Context} from './context';
import {NextFunction} from 'express';

type MiddlewareInput = {
  ctx: Context;
  next: NextFunction;
};
type MiddlewareFunction = ({ctx, next}: MiddlewareInput) => Promise<void>;

export const isAuthenticated: MiddlewareFunction = async ({ctx, next}) => {
  if (!ctx.user) {
    // ❌ user is not authenticated
    throw new TRPCError({code: 'UNAUTHORIZED'});
  }
  await next();
};
