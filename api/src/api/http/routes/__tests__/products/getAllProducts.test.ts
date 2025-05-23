import app from '@app/app';
import request from 'supertest';

const ENDPOINT = '/api/produtos';

describe(`GET ${ENDPOINT}`, () => {
  it('should get all products', async () => {
    const res = await request(app).get(ENDPOINT).expect(200);

    expect(res.body.products.length).toBeGreaterThan(1);
  });
});
