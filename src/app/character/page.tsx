import Heading from '@/components/heading/heading';
import Image from 'next/image';

export default function Character() {
  return (
    <>
      <Heading title='Character' />
      <div className='flex space-x-4'>
        <aside className='w-1/3 border border-gray-100 p-8 rounded-2xl bg-white'>
          <div className='flex justify-between itens-center mb-4'>
            <div>
              <h2 className='text-xl text-primary font-heading'>Pikachu</h2>
              <span className='text-sm text-sky-500 font-heading'>Species</span>
            </div>
            <div className='w-16 rounded-full border border-gray-100 bg-gray-50'>
              <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                alt="character's image"
                width={75}
                height={75}
              />
            </div>
          </div>
          <div>
            <ul className='space-y-1'>
              <li>Height</li>
              <li>Weight</li>
              <li>Abilities</li>
              <li>Stats</li>
            </ul>
          </div>
        </aside>

        <section className='grid grid-cols-3 gap-5 w-full'>
          <div className='border border-gray-100 p-5 rounded-2xl bg-white'>
            <h2 className='text-md text-indigo-600 uppercase font-heading mb-4'>
              Forms
            </h2>
            <ul className='space-y-1'>
              <li>HP</li>
              <li>Attack</li>
              <li>Defense</li>
              <li>Special Attack</li>
              <li>Special Defense</li>
              <li>Speed</li>
            </ul>
          </div>

          <div className='border border-gray-100 p-5 rounded-2xl bg-white'>
            <h2 className='text-md text-indigo-600 uppercase font-heading mb-4'>
              Stats
            </h2>
            <ul className='space-y-1'>
              <li>HP</li>
              <li>Attack</li>
              <li>Defense</li>
              <li>Special Attack</li>
              <li>Special Defense</li>
              <li>Speed</li>
            </ul>
          </div>

          <div className='border border-gray-100 p-5 rounded-2xl bg-white'>
            <h2 className='text-md text-indigo-600 uppercase font-heading mb-4'>
              Abilities
            </h2>
            <ul className='space-y-1'>
              <li>HP</li>
              <li>Attack</li>
              <li>Defense</li>
              <li>Special Attack</li>
              <li>Special Defense</li>
              <li>Speed</li>
            </ul>
          </div>
        </section>
      </div>
      <section className='border border-gray-100 p-5 rounded-2xl bg-white mt-10'>
        <h2 className='text-md text-primary font-heading uppercase'>
          Evolution
        </h2>
      </section>
    </>
  );
}
