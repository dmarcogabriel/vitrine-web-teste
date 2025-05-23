import {getCookie} from './cookies';
import {RequestError} from './errors';

async function getStoredSessionCookie() {
  const sessionCookie = await getCookie('session');

  return sessionCookie ? `session=${sessionCookie}` : '';
}

async function fetchData(endpoint, options) {
  // eslint-disable-next-line no-undef
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log('BASE URL: ', BASE_URL);

  const token = await getStoredSessionCookie();

  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: options.method,
    body: options.body
      ? JSON.stringify(Object.fromEntries(options.body))
      : undefined,
    next: {
      revalidate: 60,
    },
    headers: {
      ...(options.headers ?? {}),
      cookie: token,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.log('DATA: ', data);
    console.log(`HEADERS: `, res.headers);
    throw new RequestError({
      message: data.error,
      inputErrors: data.inputErrors,
    });
  }

  return {data, headers: res.headers};
}

export default {
  get(endpoint) {
    return fetchData(endpoint, {method: 'GET'});
  },
  post(endpoint, body) {
    return fetchData(endpoint, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
