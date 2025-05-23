import {cookies} from 'next/headers';

export const setCookie = async (name, value) => {
  const cookiesStore = await cookies();

  cookiesStore.set({
    name: name,
    value: value,
    secure: true,
    httpOnly: true,
    path: '/',
  });
};

export const getCookie = async (name) => {
  const cookiesStore = await cookies();

  return cookiesStore.get(name)?.value;
};
