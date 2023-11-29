import Heading from '@/components/heading/heading';

import FetchList from '../components/fetchList/fetchList';
import SearchBox from '../components/searchBox/searchBox';

export default function Home() {
  return (
    <>
      <Heading title='Home' />
      <section className='rounded-2xl border border-sky-100 p-5 bg-white w-full'>
        <SearchBox />
        <div className='hidden'>
          <h2>Resultados da busca</h2>
        </div>
      </section>
      <section className='grid grid-cols-3 gap-5 mt-10'>
        <FetchList title='Pokemons' pathName='pokemon' limit={10} />
        <FetchList title='Types' pathName='type' limit={10} />
        <FetchList title='Abilities' pathName='ability' limit={10} />
      </section>
    </>
  );
}
