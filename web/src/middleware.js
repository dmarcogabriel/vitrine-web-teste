import {NextResponse} from 'next/server';
import {getCookie} from './lib/cookies';

export const middleware = async (req) => {
  const path = req.nextUrl.pathname;

  const isAuthenticatedRoute = path.match(/^\/produtos\/[^/]+$/);

  if (isAuthenticatedRoute) {
    try {
      // * O ideal seria buscar os dados do usuário no servidor
      const cookie = await getCookie('session');

      if (!cookie) {
        const signInUrl = new URL('/entrar', req.url);
        signInUrl.searchParams.set('redirect', path);
        return NextResponse.redirect(signInUrl);
      }

      return NextResponse.next();
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      const signInUrl = new URL('/entrar', req.url);
      signInUrl.searchParams.set('redirect', path);
      return NextResponse.redirect(signInUrl);
    }
  }
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
