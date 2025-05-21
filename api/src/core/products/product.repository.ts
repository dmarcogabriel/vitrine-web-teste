import {CustomError} from '@app/common/errors/CustomError';
import ProductModel from '@app/infra/database/models/Product';

export class ProductRepository {
  constructor(private readonly model: typeof ProductModel) {}

  public async findAllProducts() {
    const products = await this.model.find();

    return products.map((product) => product.toJSON());
  }

  public async findById(productId: string) {
    const foundProduct = await this.model.findById(productId);

    if (!foundProduct) {
      throw new CustomError('Produto não encontrado.', 400);
    }

    return foundProduct.toJSON();
  }
}
