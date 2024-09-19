import {describe, it, expect} from 'vitest';
import {agent as request} from 'supertest';
import TestAgent from 'supertest/lib/agent';
import app, {init} from '@frontend/app';

describe('App', async () => {
  // supertest handles server tear up/down
  await init;

  it('starts without errors', async () => {
    let server;
    let error = null;
    try {
      server = await request(app);
    } catch (e) {
      error = e;
    }
    expect(error).toBeNull();
    expect(server).toBeDefined();
    expect(server).toBeInstanceOf(TestAgent);
  });

  it('GET /about', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<h1>About</h1>');
  });
});
