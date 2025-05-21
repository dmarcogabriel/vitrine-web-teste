import {CustomError} from '@app/common/errors/CustomError';
import {Request, Response, NextFunction} from 'express';

export const handleError = (
  error: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  if (error instanceof CustomError) {
    res.status(error.status).json({
      error: error.message,
    });
    return;
  }

  res.status(500).json({
    error: 'Ops, algo de errado aconteceu, tente novamente mais tarde.',
  });
};
