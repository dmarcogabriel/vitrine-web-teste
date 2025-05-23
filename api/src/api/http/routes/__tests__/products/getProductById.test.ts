import app from '@app/app';
import request from 'supertest';

const ENDPOINT = '/api/produtos';

describe(`GET ${ENDPOINT}/:id`, () => {
  describe('happy paths', () => {
    it('should get product by id', async () => {
      const res = await request(app).get(`${ENDPOINT}`).expect(200);

      const [product] = res.body.products;

      const cookie = await global.signIn();

      return request(app)
        .get(`${ENDPOINT}/${product.id}`)
        .set('Cookie', cookie)
        .expect(200);
    });
  });

  describe('unhappy paths', () => {
    it('should fail with not signed user', async () => {
      return request(app).get(`${ENDPOINT}/id`).expect(401);
    });

    it('should fail with invalid cookie', async () => {
      return request(app)
        .get(`${ENDPOINT}/id`)
        .set('Cookie', 'invalid')
        .expect(401);
    });

    it('should fail on invalid id', async () => {
      const cookie = await global.signIn();

      return request(app)
        .get(`${ENDPOINT}/invalid`)
        .set('Cookie', cookie)
        .expect(400);
    });

    it('should fail with not found product', async () => {
      const cookie = await global.signIn();

      return request(app)
        .get(`${ENDPOINT}/682f780af9f3cded3caea9a8`)
        .set('Cookie', cookie)
        .expect(400);
    });
  });
});
