import {describe, it, expect} from 'vitest';
import {createPublicCaller} from './_helper';

describe('hello', () => {
  it("should return 'hello'", async () => {
    const caller = createPublicCaller();
    const result = await caller.hello.query();
    expect(result).toStrictEqual({
      message: 'Hello world!',
    });
  });
});
