import Heading from '@/components/heading/heading';

import FetchList from '../components/fetchList/fetchList';
import SelectSearchBox from '../components/searchBox/selectSearchBox';

export default function Home() {
  return (
    <div className='p-5'>
      <Heading title='Home' />
      <SelectSearchBox />
      <section className='grid grid-cols-3 gap-5 mt-10'>
        <FetchList title='Pokemons' pathName='pokemon' limit={10} />
        <FetchList title='Types' pathName='type' limit={10} />
        <FetchList title='Abilities' pathName='ability' limit={10} />
      </section>
    </div>
  );
}
