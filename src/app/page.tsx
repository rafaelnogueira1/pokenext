import Heading from '@/components/heading/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Heading title='Home' />
      <section className='rounded-2xl border border-gray-200 p-5 bg-gray-50 w-full'>
        <form className='flex space-x-3'>
          <Input type='text' name='search' />
          <Button type='submit' className='w-1/4 h-12 rounded-full'>
            Search
          </Button>
        </form>
        <div className='hidden'>
          <h2>Resultados da busca</h2>
        </div>
      </section>
      <section className='grid grid-cols-3 gap-5 mt-10'>
        <div className='border border-gray-100 p-5 rounded-2xl bg-white'>
          <h2 className='text-heading font-heading color-heading mb-4'>
            Characters
          </h2>
          <ul className='space-y-3'>
            <li>
              <Link href='/' className='text'>
                Luke Skywalker
              </Link>
            </li>
            <li>
              <Link href='/'>Han Solo</Link>
            </li>
          </ul>
        </div>
        <div className='border border-gray-100 p-5 rounded-2xl bg-white'>
          <h2 className='text-heading font-heading color-heading mb-3'>
            Movies
          </h2>
          <ul className='space-y-3'>
            <li>
              <Link href='/'>Luke Skywalker</Link>
            </li>
            <li>
              <Link href='/'>Han Solo</Link>
            </li>
          </ul>
        </div>
        <div className='border border-gray-100 p-5 rounded-2xl bg-white'>
          <h2 className='text-heading font-heading color-heading mb-3'>
            Spaceships
          </h2>
          <ul className='space-y-3'>
            <li>
              <Link href='/'>Luke Skywalker</Link>
            </li>
            <li>
              <Link href='/'>Han Solo</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
