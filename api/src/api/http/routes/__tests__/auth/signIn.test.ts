import app from '@app/app';
import request from 'supertest';

const ENDPOINT = '/api/auth/entrar';

const ValidCredentials = {
  email: 'adm@teste.com',
  password: '@1Senha',
};

describe(`POST ${ENDPOINT}`, () => {
  describe('happy path', () => {
    it('should sign in', async () => {
      const res = await request(app)
        .post(ENDPOINT)
        .send(ValidCredentials)
        .expect(200);

      expect(res.get('Set-Cookie')).toBeDefined();
    });
  });

  describe('unhappy path', () => {
    describe('missing data', () => {
      it('should fail on empty body', async () => {
        const res = await request(app).post(ENDPOINT).send().expect(400);

        expect(res.body.inputErrors).toBeDefined();
      });

      it('should fail on empty object body', async () => {
        const res = await request(app).post(ENDPOINT).send({}).expect(400);

        expect(res.body.inputErrors).toBeDefined();
      });

      it('should fail on missing password', async () => {
        const res = await request(app)
          .post(ENDPOINT)
          .send({
            email: ValidCredentials.email,
          })
          .expect(400);

        expect(res.body.inputErrors).toBeDefined();
      });

      it('should fail on missing email', async () => {
        const res = await request(app)
          .post(ENDPOINT)
          .send({
            password: ValidCredentials.password,
          })
          .expect(400);

        expect(res.body.inputErrors).toBeDefined();
      });
    });

    describe('invalid types', () => {
      it('should fail wrong email type', async () => {
        const res = await request(app)
          .post(ENDPOINT)
          .send({
            email: 1,
          })
          .expect(400);

        expect(res.body.inputErrors).toBeDefined();
      });

      it('should fail wrong password type', async () => {
        const res = await request(app)
          .post(ENDPOINT)
          .send({
            password: 1,
          })
          .expect(400);

        expect(res.body.inputErrors).toBeDefined();
      });

      it('should fail wrong body type', async () => {
        const res = await request(app)
          .post(ENDPOINT)
          .send({
            email: 1,
            password: 1,
          })
          .expect(400);

        expect(res.body.inputErrors).toBeDefined();
      });
    });
  });
});
