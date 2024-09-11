import {describe, it, expect} from 'vitest';
import setup from '@/sample/setup';

describe('sample setup', () => {
  // supertest handles server tear up/down

  it('path should be /sample', async () => {
    expect(setup.path).toEqual('/sample');
  });
});
