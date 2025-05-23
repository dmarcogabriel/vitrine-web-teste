import {CustomError} from '@app/common/errors/CustomError';
import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {env} from 'node:process';

type UserPayload = {
  id: number;
  email: string;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      signedUser?: UserPayload;
    }
  }
}

export const requireAuth = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const NotAuthorizedError = new CustomError('Não autorizado.', 401);
  if (!req.session?.jwt) {
    throw NotAuthorizedError;
  }

  try {
    const payload = jwt.verify(req.session.jwt, env.JWT_KEY!) as UserPayload;
    req.signedUser = payload;

    next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw NotAuthorizedError;
  }
};
