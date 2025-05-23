'use server';

import api from '@app/lib/api';
import {setCookie} from '@app/lib/cookies';

export async function signIn(_prevState, formData) {
  try {
    const {headers} = await api.post('auth/entrar', formData);

    const setCookieHeader = headers.get('Set-Cookie');
    const token = setCookieHeader?.split(';')[0].split('=')[1];

    if (token) await setCookie('session', token);

    return {success: true};
  } catch (err) {
    return {
      success: false,
      message: err.message,
      inputErrors: err.inputErrors,
    };
  }
}
