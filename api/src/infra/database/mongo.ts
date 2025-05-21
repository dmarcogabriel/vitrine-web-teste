import mongoose from 'mongoose';
import {env} from 'node:process';
import {productSeeds} from './seeds/products.seeds';

export default {
  async connect() {
    if (!env.MONGO_URI) {
      throw new Error('MONGO_URI is not set');
    }

    try {
      await mongoose.connect(env.MONGO_URI!);
      console.log('Connectado ao banco de dados!');
    } catch (err) {
      console.error(err);
    }
  },

  async seeds() {
    await productSeeds();
  },
};
