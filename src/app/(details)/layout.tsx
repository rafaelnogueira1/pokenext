import BackPage from '@/components/backPage/backPage';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='p-5'>
      <BackPage />
      {children}
    </div>
  );
}
