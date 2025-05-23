import {UserRepository} from './user.repository';
import {UserModel} from '@app/infra/database/models';
import {UserService} from './user.service';

export const createUserService = () => {
  const userRepository = new UserRepository(UserModel);

  return new UserService(userRepository);
};
