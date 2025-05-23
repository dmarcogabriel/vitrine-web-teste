import mongoose from 'mongoose';
import {UserModel} from '@app/infra/database/models';

const User = {
  name: 'Administrador',
  email: 'adm@teste.com',
  password: '@1Senha',
};

export const userSeeds = async () => {
  try {
    const user = UserModel.build(User);

    await user.save();
  } catch (err) {
    if (err instanceof mongoose.mongo.MongoServerError) {
      if (err.code === 11000) {
        return;
      }
    }
  }
};
