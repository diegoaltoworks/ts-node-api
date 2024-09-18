import {describe, it, expect} from 'vitest';
import {agent as request} from 'supertest';
import app from '@/app';
import config from '@/config';

const authorization = config.JWT_TEST_TOKEN;

describe('REST api user route', () => {
  // supertest handles server tear up/down

  it('GET /api/user fails without valid authorization header', async () => {
    const response = await request(app).get('/api/user');
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: 'UNAUTHORIZED',
      code: 'UNAUTHORIZED',
    });
  });

  it('GET /api/user works with valid authorization header', async () => {
    const response = await request(app)
      .get('/api/user')
      .set('Authorization', `Bearer ${authorization}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Hello user!'});
  });
});
