import app from '@app/app';
import request from 'supertest';

const ENDPOINT = '/api/produtos';

describe(`GET ${ENDPOINT}/:id`, () => {
  describe('happy paths', async () => {
    it.skip('should get product by id', async () => {
      // todo: must get an existing product id
      const res = await request(app).get(`${ENDPOINT}/1`).expect(200);

      expect(res.body.products.length).toBeGreaterThan(1);
    });
  });

  describe('unhappy paths', () => {
    it('should fail on invalid id', async () => {
      return request(app).get(`${ENDPOINT}/invalid`).expect(400);
    });

    it('should fail with not found product', async () => {
      // todo: create a fake id
      return request(app).get(`${ENDPOINT}/invalid`).expect(400);
    });
  });
});
