import {type UserModelInterface} from '@app/infra/database/models';

export class UserRepository {
  constructor(private readonly model: UserModelInterface) {}

  public async findByEmail(email: string) {
    return this.model.findOne({
      email,
    });
  }
}
