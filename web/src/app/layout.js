import './globals.css';
import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Vitrine de Produtos',
  description: 'Uma Vitrine com os melhores produtos que você já viu.',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>{children}</body>
    </html>
  );
}
