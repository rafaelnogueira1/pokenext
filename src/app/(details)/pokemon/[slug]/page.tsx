import Heading from '@/components/heading/heading';
import Title from '@/components/title/title';
import { HeartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Search } from './search';
import { TableDataPokemon } from './tableDataPokemon';

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
        (name) => name.language.name === 'en'
      );

      return { name: language.name };
    })
  );

  return (
    <div>
      <div className='grid grid-cols-2'>
        <Heading title={pokemon.name} />
        <Search />
      </div>
      <section className='flex gap-5'>
        <div className='w-1/2 border border-sky-100 p-5 rounded-2xl bg-white'>
          <div className='flex justify-between items-center'>
            <ul className='space-y-3'>
              <li>
                <span className='text-sky-800 font-semibold'>Species:</span>{' '}
                {pokemon.species.name}
              </li>
              <li>
                <span className='text-sky-800 font-semibold'>Height:</span>{' '}
                {pokemon.height}
              </li>
              <li>
                <span className='text-sky-800 font-semibold'>Weight:</span>{' '}
                {pokemon.weight}
              </li>
              <li>
                <span className='text-sky-800 font-semibold'>
                  Base experience:
                </span>{' '}
                {pokemon.base_experience}
              </li>
              <li>
                <span className='text-sky-800 font-semibold'>Order:</span>{' '}
                {pokemon.order}
              </li>
            </ul>
            <div className='w-28 rounded-full border border-sky-100 bg-gray-50'>
              <Image
                src={pokemon.sprites.front_default}
                alt="character's image"
                width={115}
                height={115}
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-5 w-full h-fit'>
          {pokemon.stats.map((stat: any) => (
            <div
              key={stat.stat.name}
              className='capitalize border border-sky-100 p-5 rounded-2xl bg-white flex items-center h-fit'
            >
              <div className='rounded-xl border border-sky-400 bg-sky-600 flex justify-center items-center p-3 mr-3'>
                <HeartIcon className='w-6 h-6 text-white' />
              </div>
              <p className='text-sky-600'>
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

      <section className='flex gap-5'>
        <div className='w-1/2 border border-sky-100 p-5 rounded-2xl bg-white mt-4'>
          <Title level={2} title='Moves' className='text-yellow-400' />
          <ul className='grid grid-cols-10 gap-1'>
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

        <div className='w-1/2 border border-sky-100 p-5 rounded-2xl bg-white mt-4'>
          <Title level={2} title='Locations' className='text-yellow-400' />
          <TableDataPokemon data={encountersList} />
        </div>
      </section>
    </div>
  );
}
