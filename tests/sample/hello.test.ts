import {describe, it, expect} from 'vitest';
import {agent as request} from 'supertest';
import app from '@/app';

describe('sample hello route', () => {
  // supertest handles server tear up/down

  it('GET /sample/hello', async () => {
    const response = await request(app).get('/sample/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Hello world'});
  });
});
