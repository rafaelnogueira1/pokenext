import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/sidebar/sidebar';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'PokeNext',
  description: 'Look for your favorite pokemom',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang='en' className='min-h-screen light'>
      <body className='min-h-screen'>
        <Providers>
          <div className='flex min-h-screen bg-sky-50'>
            <Sidebar />
            <main className='w-full'>
              {children}
              {modal}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
