'use client';

import Image from 'next/image';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Title from '../title/title';
import { usePokeballCart } from '@/store/managePokeball';

export function Pokeball() {
  const pokeballCart = usePokeballCart();

  if (!pokeballCart) {
    return null;
  }

  const { pokeballQtd, removeAllFromPokeball, pokeball, removeFromPokeball } =
    pokeballCart;

  return (
    <div className='relative'>
      <span className='text-yellow-500 bg-white px-2 py-0.5 rounded-full text-md font-bold absolute -top-3 -right-3'>
        {pokeballQtd}
      </span>
      <Sheet>
        <SheetTrigger>
          <Image
            src='/images/pokeball.svg'
            width={45}
            height={45}
            alt='Pokeball'
          />
        </SheetTrigger>
        <SheetContent side='left' className='bg-sky-500 text-white'>
          <SheetHeader>
            <div className='flex items-center space-x-5'>
              <Title level={3} title='Pokeballs' className='text-white m-0' />
              <p className='text-yellow-500 bg-white px-2 py-0.5 rounded-full text-md font-bold'>
                {pokeballQtd}
              </p>
            </div>
          </SheetHeader>

          <div className='mt-5 space-y-5'>
            {pokeballQtd > 0 ? (
              <>
                {pokeball.map((pokemon) => (
                  <div
                    className='flex items-center bg-white border border-sky-100 rounded-lg p-3'
                    key={pokemon.id}
                  >
                    <Image
                      src={pokemon.image}
                      width={90}
                      height={90}
                      alt={pokemon.name}
                    />
                    <div className='space-y-1'>
                      <p className='text-sky-800 font-semibold'>
                        {pokemon.name}
                      </p>
                      <button
                        onClick={() => removeFromPokeball(pokemon.id)}
                        className='ghost text-sm flex items-center text-black'
                      >
                        <XMarkIcon className='w-4 h-4 text-red-500 mr-1' />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <SheetFooter>
                  <button
                    onClick={removeAllFromPokeball}
                    className='ghost text-md flex items-center text-red-700 underline'
                  >
                    Clear all
                  </button>
                </SheetFooter>
              </>
            ) : (
              <div className='flex items-center bg-white border border-sky-100 rounded-lg p-3'>
                <p className='text-sky-800 text-md'>No Pokeballs</p>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
