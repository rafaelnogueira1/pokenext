export default function Heading({ title }: { title: string }) {
  return (
    <header className='mb-10'>
      <h1 className='text-heading font-heading color-heading'>{title}</h1>
    </header>
  );
}
