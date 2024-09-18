import {z} from 'zod';
import {privateProcedure, router} from '@/trpc/trpc';

export const user = router({
  query: privateProcedure
    .meta({
      openapi: {method: 'GET', path: '/user'},
    })
    .input(z.void())
    .output(
      z.object({
        message: z.string().optional(),
      })
    )
    .query(async opts => {
      return {message: `Hello user!`};
    }),
});
