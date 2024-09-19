import {describe, it, expect} from 'vitest';

import {agent as request} from 'supertest';
import app from '@backend/app';

describe('app landing page', () => {
  // supertest handles server tear up/down

  it('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('GET /healthcheck', async () => {
    const response = await request(app).get('/healthcheck');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('OK');
  });
});
