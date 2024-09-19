import {describe, it, expect} from 'vitest';
import {createProtectedCaller, createPublicCaller} from './_helper';

describe('TRPC route user', () => {
  it('should throw UNAUTHORIZED to public caller', async () => {
    const caller = createPublicCaller();
    await expect(caller.user.query()).rejects.toThrow();
  });
  it('should say hello to AUTHORIZED caller', async () => {
    const caller = createProtectedCaller();
    await expect(caller.user.query()).resolves.toStrictEqual({
      message: 'Hello user!',
    });
  });
});
