import {MongoMemoryServer} from 'mongodb-memory-server';
import {env} from 'node:process';
import mongoDb from '@app/infra/database/mongo';
import request from 'supertest';
import app from '@app/app';

let mongo: MongoMemoryServer;
beforeAll(async () => {
  jest.spyOn(console, 'log').mockImplementation(() => {});

  mongo = await MongoMemoryServer.create();
  env.MONGO_URI = mongo.getUri();

  await mongoDb.connect();
  await mongoDb.seeds();
});

beforeEach(jest.clearAllMocks);

afterAll(async () => {
  await mongo.stop();
  await mongoDb.closeConnection();
});

declare global {
  // eslint-disable-next-line no-var
  var signIn: () => Promise<string[]>;
}

global.signIn = async () => {
  const res = await request(app)
    .post('/api/auth/entrar')
    .send({
      email: 'adm@teste.com',
      password: '@1Senha',
    })
    .expect(200);

  const cookie = res.get('Set-Cookie');
  if (!cookie) {
    throw new Error('Expected cookie but got undefined');
  }

  return cookie;
};
