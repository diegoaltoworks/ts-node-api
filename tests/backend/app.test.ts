import {describe, it, expect} from 'vitest';
import {agent as request} from 'supertest';
import TestAgent from 'supertest/lib/agent';
import app from '@backend/app';

describe('App', () => {
  // supertest handles server tear up/down

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

  it('GET /sample/hello should say hello', async () => {
    const response = await request(app).get('/sample/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Hello world'});
  });
});
