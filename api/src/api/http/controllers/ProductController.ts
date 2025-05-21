import {createProductService} from '@app/core/products/productService.factory';
import {Request, Response} from 'express';

export class ProductController {
  public static async getAll(_req: Request, res: Response) {
    const products = await createProductService().getAllProducts();

    res.json({
      products,
    });
  }

  public static async getById(req: Request, res: Response) {
    const product = await createProductService().getById(req);

    res.json({
      product,
    });
  }

  public static async create(req: Request, res: Response) {
    // todo: implement here
  }
}
