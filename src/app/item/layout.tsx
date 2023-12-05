import { Providers } from '../providers';

export default function Layout({
  children,
  attribute,
  category,
}: {
  children: React.ReactNode;
  attribute: React.ReactNode;
  category: React.ReactNode;
}) {
  return (
    <>
      {children}
      {attribute}
      {category}
    </>
  );
}
