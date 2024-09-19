import {createTRPCProxyClient, httpBatchLink} from '@trpc/client';
import type {AppRouter} from '@backend/trpc/appRouter';
import config from '@frontend/config';

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${config.PROJECT_URL}/trpc`,

      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          //authorization: cookies(),
        };
      },
    }),
  ],
});
