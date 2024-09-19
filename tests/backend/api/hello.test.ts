import {describe, it, expect} from 'vitest';
import {agent as request} from 'supertest';
import app from '@backend/app';

describe('REST api hello route', () => {
  // supertest handles server tear up/down

  it('GET /api/hello', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Hello world!'});
  });
});
describe('hello router', () => {
  it('GET /api/hello', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Hello world!'});
  });

  it('GET /api/hello/world', async () => {
    const response = await request(app).get('/api/hello/world');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Hello world!'});
  });

  it('GET /api/hello/John', async () => {
    const response = await request(app).get('/api/hello/John');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Ciao, John!'});
  });

  it('GET /api/hello/{name}', async () => {
    const response = await request(app).get('/api/hello/John?greeting=Hola');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Hola, John!'});
  });
});
