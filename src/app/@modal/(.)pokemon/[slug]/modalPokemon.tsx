'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal';
import { HeartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';

export default function ModalPokemon({ pokemon }: { pokemon: any }) {
  const { back, push } = useRouter();

  return (
    <Modal defaultOpen onClose={() => back()} size='4xl'>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              {pokemon.name}
            </ModalHeader>
            <ModalBody>
              <section className='flex gap-5'>
                <div className='w-1/2 border border-sky-100 p-5 rounded-2xl bg-white'>
                  <div className='flex justify-between items-center'>
                    <ul className='space-y-3'>
                      <li>
                        <span className='text-sky-800 font-semibold'>
                          Species:
                        </span>{' '}
                        {pokemon.species.name}
                      </li>
                      <li>
                        <span className='text-sky-800 font-semibold'>
                          Height:
                        </span>{' '}
                        {pokemon.height}
                      </li>
                      <li>
                        <span className='text-sky-800 font-semibold'>
                          Weight:
                        </span>{' '}
                        {pokemon.weight}
                      </li>
                      <li>
                        <span className='text-sky-800 font-semibold'>
                          Base experience:
                        </span>{' '}
                        {pokemon.base_experience}
                      </li>
                      <li>
                        <span className='text-sky-800 font-semibold'>
                          Order:
                        </span>{' '}
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
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => window.location.reload()} color='primary'>
                See page
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
