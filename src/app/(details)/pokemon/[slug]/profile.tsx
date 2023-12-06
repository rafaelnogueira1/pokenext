'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Profile({ pokemon }: { pokemon: any }) {
  return (
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
            <span className='text-sky-800 font-semibold'>Base experience:</span>{' '}
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
      <Button variant='default' className='mt-5' onClick={() => {}}>
        Add to pokeball
      </Button>
    </div>
  );
}
