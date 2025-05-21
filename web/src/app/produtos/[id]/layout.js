import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Detalhes',
  description: '',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>{children}</body>
    </html>
  );
}
