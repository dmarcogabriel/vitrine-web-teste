import api from '@app/lib/api';

export async function getAllProducts() {
  const {data} = await api.get('produtos');

  return data;
}

export async function getProductById(productId) {
  if (!productId) return;

  const {data} = await api.get(`produtos/${productId}`);

  return data;
}
