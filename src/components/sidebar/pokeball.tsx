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

export function Pokeball() {
  return (
    <div className='relative'>
      <span className='text-yellow-500 bg-white px-2 py-0.5 rounded-full text-md font-bold absolute -top-3 -right-3'>
        0
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
                0
              </p>
            </div>
          </SheetHeader>

          <div className='mt-5 space-y-5'>
            <div className='flex items-center bg-white border border-sky-100 rounded-lg p-3'>
              <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                width={90}
                height={90}
                alt='pokemon'
              />
              <div className='space-y-1'>
                <p className='text-sky-800 font-semibold'>Pikachu</p>
                <button
                  onClick={() => {}}
                  className='ghost text-sm flex items-center text-black'
                >
                  <XMarkIcon className='w-4 h-4 text-red-500 mr-1' />
                  Remove
                </button>
              </div>
            </div>

            <SheetFooter>
              <button
                onClick={() => {}}
                className='ghost text-md flex items-center text-red-700 underline'
              >
                Clear all
              </button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
