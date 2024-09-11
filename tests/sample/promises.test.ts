import {describe, it, expect} from 'vitest';
import {agent as request} from 'supertest';
import app from '@/app';

describe('sample promise routes', () => {
  // supertest handles server tear up/down

  it('GET /sample/promises/resolve', async () => {
    const response = await request(app).get('/sample/promises/resolve');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      result: 'sample: promise result',
    });
  });

  it('GET /sample/promises/reject', async () => {
    const response = await request(app).get('/sample/promises/reject');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      statusCode: 500,
      type: 'RuntimeError',
      message: 'rejected promise',
    });
  });

  it('GET /sample/promises/throw', async () => {
    const response = await request(app).get('/sample/promises/throw');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      statusCode: 500,
      type: 'RuntimeError',
      message: 'error promise',
    });
  });
});
