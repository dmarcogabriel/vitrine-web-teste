import {CustomError} from '@app/common/errors/CustomError';
import ProductModel from '@app/infra/database/models/Product';

export class ProductRepository {
  constructor(private readonly model: typeof ProductModel) {}

  public async findAllProducts() {
    const products = await this.model.find();

    return products.map((product) => product.toJSON());
  }

  public async findById(productId: string) {
    try {
      const foundProduct = await this.model.findById(productId);

      if (!foundProduct) {
        throw new CustomError('Produto não encontrado.', 400);
      }

      return foundProduct.toJSON();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      throw new CustomError('Produto não encontrado.', 400);
    }
  }
}
