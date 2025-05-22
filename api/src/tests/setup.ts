import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import {env} from 'node:process';
import mongoDb from '@app/infra/database/mongo';
import {productSeeds} from '@app/infra/database/seeds/products.seeds';

let mongo: MongoMemoryServer;
beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  env.MONGO_URI = mongo.getUri();

  await mongoDb.connect();
  await productSeeds();
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
