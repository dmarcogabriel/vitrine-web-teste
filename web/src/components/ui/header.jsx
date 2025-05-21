import Link from 'next/link';

export function Header() {
  return (
    <nav className="flex justify-center p-4 shadow-sm">
      <Link href="/">
        <p className="text-2xl font-bold">Vitrine de Produtos</p>
      </Link>
    </nav>
  );
}
