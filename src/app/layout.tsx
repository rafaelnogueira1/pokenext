import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/sidebar/sidebar';

export const metadata: Metadata = {
  title: 'PokeNext',
  description: 'Look for your favorite pokemom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='min-h-screen'>
      <body className='min-h-screen'>
        <div className='flex min-h-screen bg-sky-50'>
          <Sidebar />
          <main className='w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
