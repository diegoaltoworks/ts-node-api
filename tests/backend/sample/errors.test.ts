import {describe, it, expect} from 'vitest';
import {agent as request} from 'supertest';
import app from '@backend/app';

describe('sample error routes', () => {
  // supertest handles server tear up/down

  it('GET /sample/errors/caught', async () => {
    const response = await request(app).get('/sample/errors/caught');
    expect(response.status).toBe(500);
    console.log(response.text);
    console.log(response.body);
    console.log(response.body.message);
    expect(response.body).toEqual({
      statusCode: 500,
      type: 'RuntimeError',
      message: 'sample: thrown and caught',
    });
  });

  it('GET /sample/errors/uncaught', async () => {
    const response = await request(app).get('/sample/errors/uncaught');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      statusCode: 500,
      type: 'RuntimeError',
      message: 'sample: uncaught error',
    });
  });

  it('GET /sample/errors/not-found', async () => {
    const response = await request(app).get('/sample/errors/not-found');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      statusCode: 404,
      type: 'NotFoundError',
      message: 'sample: not found error',
    });
  });

  it('GET /sample/errors/not-authorized', async () => {
    const response = await request(app).get('/sample/errors/not-authorized');
    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      statusCode: 403,
      type: 'AuthError',
      message: 'sample: not authorized error',
    });
  });
});
