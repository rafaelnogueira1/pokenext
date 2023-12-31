import Heading from '@/components/heading/heading';
import Title from '@/components/title/title';
import { HeartIcon } from '@heroicons/react/24/solid';
import { Search } from './search';
import { TableDataPokemon } from './tableDataPokemon';
import { Profile } from './profile';

export default async function Pokemon({
  params,
}: {
  params: { slug: string };
}) {
  const pokemon = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${params.slug}`
  ).then((res: Response) => {
    return res.json();
  });

  const encounters = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${params.slug}/encounters`
  ).then((res: Response) => {
    return res.json();
  });

  const encountersList = await Promise.all(
    encounters.map(async (encounter: any) => {
      const res = await fetch(`${encounter.location_area.url}`);
      const data = await res.json();
      const [language] = data.names.filter(
        (name: any) => name.language.name === 'en'
      );

      return { name: language.name };
    })
  );

  return (
    <div>
      <div className='lg:grid lg:grid-cols-2'>
        <Heading title={pokemon.name} />
        <Search />
      </div>
      <section className='md:mt-5 md:flex gap-5'>
        <Profile pokemon={pokemon} />
        <div className='max-sm:mt-5 grid grid-cols-2 lg:grid-cols-3 gap-5 w-full h-fit'>
          {pokemon.stats.map((stat: any) => (
            <div
              key={stat.stat.name}
              className='max-lg:space-y-1 max-lg:text-center capitalize border border-sky-100 p-5 rounded-2xl bg-white lg:flex items-center h-fit'
            >
              <div className='max-lg:mx-auto rounded-xl border border-sky-400 bg-sky-600 flex justify-center items-center p-3 mr-3'>
                <HeartIcon className='w-6 h-6 text-white' />
              </div>
              <p className='text-sky-600 md:mt-2'>
                <span className='text-md text-sky-900 uppercase font-heading mb-1'>
                  {stat.stat.name}
                </span>
                <br />
                {stat.base_stat}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-5 flex gap-5 w-full'>
        <div className='border border-sky-100 p-5 rounded-2xl bg-white flex-1'>
          <Title level={2} title='Types' className='text-yellow-400' />
          <ul className='space-y-1'>
            {pokemon.types.map((type: any) => (
              <li key={type.type.name} className='capitalize'>
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>

        <div className='border border-sky-100 p-5 rounded-2xl bg-white flex-1'>
          <Title level={2} title='Abilities' className='text-yellow-400' />
          <ul className='space-y-1'>
            {pokemon.abilities.map((ability: any) => (
              <li key={ability.ability.name} className='capitalize'>
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='max-sm:space-y-5 lg:flex gap-5'>
        <div className='lg:w-1/2 border border-sky-100 p-5 rounded-2xl bg-white mt-4'>
          <Title level={2} title='Moves' className='text-yellow-400' />
          <ul className='grid grid-cols-3 max-sm:h-60 md:h-96 md:overflow-y-scroll 2xl:grid-cols-10 gap-1'>
            {pokemon.moves.map((move: any) => (
              <li
                key={move.move.name}
                className='capitalize p-2 rounded-md even:bg-gray-50'
              >
                {move.move.name}
              </li>
            ))}
          </ul>
        </div>

        <div className='lg:w-1/2 border border-sky-100 p-5 rounded-2xl bg-white mt-4'>
          <Title level={2} title='Locations' className='text-yellow-400' />
          <TableDataPokemon data={encountersList} />
        </div>
      </section>
    </div>
  );
}
