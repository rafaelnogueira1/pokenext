import Heading from '@/components/heading/heading';
import Title from '@/components/title/title';
import { HeartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

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

  return (
    <>
      <Heading title={pokemon.name} />
      <div className='flex space-x-4'>
        <div className='w-3/4 space-y-4'>
          <section className='border border-sky-100 p-8 rounded-2xl bg-white'>
            <div className='flex justify-between items-center mb-4'>
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
          </section>

          <section className='flex flex-col space-y-4 w-full'>
            <div className='border border-sky-100 p-5 rounded-2xl bg-white'>
              <Title level={2} title='Types' className='text-yellow-400' />
              <ul className='space-y-1'>
                {pokemon.types.map((type: any) => (
                  <li key={type.slot} className='capitalize'>
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className='border border-sky-100 p-5 rounded-2xl bg-white'>
              <Title level={2} title='Abilities' className='text-yellow-400' />
              <ul className='space-y-1'>
                {pokemon.abilities.map((ability: any) => (
                  <li key={ability.name} className='capitalize'>
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <section className='flex flex-col space-y-4 w-full'>
          {pokemon.stats.map((stat: any) => (
            <div
              key={stat.stat.name}
              className='capitalize border border-sky-100 p-5 rounded-2xl bg-white flex items-center space-x-4'
            >
              <div className='rounded-xl border border-sky-400 bg-sky-600 flex justify-center items-center p-3'>
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
        </section>
      </div>

      <section className='w-full border border-sky-100 p-5 rounded-2xl bg-white mt-10'>
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
      </section>
    </>
  );
}
