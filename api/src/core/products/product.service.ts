import {Request} from 'express';
import {ProductRepository} from './product.repository';

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async getAllProducts() {
    const products = await this.productRepository.findAllProducts();

    return products;
  }

  public async getById(req: Request) {
    const {id} = req.params;

    const product = await this.productRepository.findById(id);

    return product;
  }
}
