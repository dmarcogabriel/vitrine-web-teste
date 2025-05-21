import {ProductModel} from '@app/infra/database/models';
import {ProductRepository} from './product.repository';
import {ProductService} from './product.service';

export const createProductService = () => {
  const repository = new ProductRepository(ProductModel);

  return new ProductService(repository);
};
