import api from '@app/lib/api';
import {RequestError} from '@app/lib/errors';
import {redirect} from 'next/navigation';

export async function getAllProducts() {
  const {data} = await api.get('produtos');

  return data;
}

export async function getProductById(productId) {
  if (!productId) return;

  try {
    const {data} = await api.get(`produtos/${productId}`);

    return data;
  } catch (err) {
    if (err instanceof RequestError && err.status === 401) {
      return redirect('/entrar');
    }

    throw err;
  }
}
