'use client';

import {ArrowLeft} from 'lucide-react';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isRootScreen = pathname === '/';

  const handleGoBack = () => {
    router.back();
  };

  return (
    <nav className="flex justify-center p-4 shadow-sm gap-2">
      {!isRootScreen ? (
        <button className="cursor-pointer" type="button" onClick={handleGoBack}>
          <ArrowLeft />
        </button>
      ) : null}

      <Link href="/" className="flex-1 text-center">
        <p className="text-2xl font-bold">Vitrine de Produtos</p>
      </Link>
    </nav>
  );
}
