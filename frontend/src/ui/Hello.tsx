import {client} from '@frontend/lib/trpc';
export const Hello = async () => {
  const data = await client.hello.user.query({name: 'diego'});
  return (
    <div>
      <main>
        <hr />
        data: {JSON.stringify(data)}
      </main>
    </div>
  );
};
