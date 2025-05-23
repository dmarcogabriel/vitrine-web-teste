import {Request, Response} from 'express';

export class HealthController {
  public static async checkHealth(_req: Request, res: Response) {
    res.json({
      message: 'Ok',
    });
  }
}
