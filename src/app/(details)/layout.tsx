import Sidebar from '@/components/sidebar/sidebar';
import BackPage from '@/components/backPage/backPage';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackPage />
      {children}
    </>
  );
}
