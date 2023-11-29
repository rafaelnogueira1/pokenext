import type { Metadata } from 'next';
import './globals.css';
import { Sidebar, SidebarSupport } from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Pokemon App',
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
        <div className='flex min-h-screen space-x-5 bg-sky-50 relative'>
          <Sidebar />
          <SidebarSupport />
          <main className='p-5 w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
