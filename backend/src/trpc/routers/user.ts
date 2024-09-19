import {z} from 'zod';
import {privateProcedure, router} from '@backend/trpc/trpc';

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
    .query(async () => {
      return {message: 'Hello user!'};
    }),
});
