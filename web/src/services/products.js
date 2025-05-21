import api from '@app/lib/api';

export async function getAllProducts() {
  try {
    const products = await api.get('produtos');

    return products;
  } catch (err) {
    // todo: tratar esse erro
    console.log(err);
  }
}

export async function getProductById(productId) {
  if (!productId) return;

  try {
    const product = await api.get(`produtos/${productId}`);

    return product;
  } catch (err) {
    // todo: tratar esse erro
    console.log(err);
  }
}
