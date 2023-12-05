import Heading from '@/components/heading/heading';

export default function Category() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));

  return (
    <div className='p-5'>
      <Heading title='Category' />
      <section className='grid grid-cols-3 gap-5 mt-10'>
        <p>Categories page</p>
      </section>
    </div>
  );
}
