async function fetchData(endpoint, options) {
  // eslint-disable-next-line no-undef
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: options.method,
    body: options.body ? JSON.stringify(options.body) : undefined,
    next: {
      revalidate: 60,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error);
  }

  return data;
}

export default {
  get(endpoint) {
    return fetchData(endpoint, {method: 'GET'});
  },
};
