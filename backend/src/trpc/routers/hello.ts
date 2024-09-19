import {z} from 'zod';
import {publicProcedure, router} from '@backend/trpc/trpc';

export const hello = router({
  query: publicProcedure
    .meta({
      openapi: {method: 'GET', path: '/hello'},
    })
    .input(z.void())
    .output(
      z.object({
        message: z.string().optional(),
      })
    )
    .query(async () => {
      return {message: 'Hello world!'};
    }),
  world: publicProcedure
    .meta({
      openapi: {method: 'GET', path: '/hello/world'},
    })
    .input(z.void())
    .output(
      z.object({
        message: z.string().optional(),
      })
    )
    .query(async () => {
      return {message: 'Hello world!'};
    }),
  user: publicProcedure
    .meta({
      openapi: {method: 'GET', path: '/hello/user'},
    })
    .input(
      z.object({
        name: z.string(),
        greeting: z.string().optional(),
      })
    )
    .output(
      z.object({
        message: z.string().optional(),
      })
    )
    .query(async opts => {
      return {message: `Hello, ${opts.input.name ?? 'stranger ;-)'}!`};
    }),
  hello: publicProcedure
    .meta({
      openapi: {method: 'GET', path: '/hello/{name}'},
    })
    .input(
      z
        .object({
          name: z.string(),
          greeting: z.string().optional(),
        })
        .strict()
    )
    .output(
      z.object({
        message: z.string().optional(),
      })
    )
    .query(async opts => {
      return {
        message: `${opts.input.greeting ?? 'Ciao'}, ${opts.input.name ?? 'stranger ;-)'}!`,
      };
    }),
});
