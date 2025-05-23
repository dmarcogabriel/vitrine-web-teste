import {createUserService} from '@app/core/user/userService.factory';
import {Request, Response} from 'express';

export class AuthController {
  public static async signIn(req: Request, res: Response) {
    const token = await createUserService().signIn(req);

    req.session = {
      jwt: token,
    };
    res.json({
      message: 'Entrou com sucesso',
    });
  }
}
