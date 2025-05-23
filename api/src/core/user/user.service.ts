import {Request} from 'express';
import {UserRepository} from './user.repository';
import {CustomError} from '@app/common/errors/CustomError';
import {Password} from '@app/common/helpers/Password';
import jwt from 'jsonwebtoken';
import {env} from 'node:process';
import {validate} from './user.validator';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  private generateJwt(data: Record<string, string>): string {
    if (!env.JWT_KEY) {
      throw new CustomError('JWT_KEY não informado.', 500);
    }

    return jwt.sign(data, env.JWT_KEY!);
  }

  public async signIn(req: Request): Promise<string> {
    const {email, password} = validate(req.body);

    const foundUser = await this.userRepository.findByEmail(email);

    if (!foundUser || !Password.compare(foundUser.password, password)) {
      throw new CustomError('Credenciais inválidas.', 400);
    }

    return this.generateJwt({id: foundUser.id, email: foundUser.email});
  }
}
