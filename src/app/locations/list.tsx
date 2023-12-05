'use client';

import Heading from '@/components/heading/heading';
import { useState } from 'react';
import { PokemonList } from './pokemon';

export function List({ locations }: { locations: any[] }) {
  const [pokemons, setPokemons] = useState([]);

  const handleFetchPokemons = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPokemons(data.pokemon_encounters);
    } catch (error) {
      console.error('Erro ao buscar os pokémons:', error);
    }
  };

  return (
    <div className='space-y-5'>
      <div className='border border-sky-100 bg-white p-5 rounded-2xl'>
        <Heading title='Select a place to catch pokemons' />
        <ul className='flex flex-wrap gap-5 h-40 overflow-y-scroll'>
          {locations?.map((location: any) => (
            <li key={location.name}>
              <button
                onClick={() => handleFetchPokemons(location.url)}
                className='inline-flex items-center rounded-md bg-sky-100 px-2 py-1 font-medium text-sky-700 ring-1 ring-inset ring-sky-700/10'
              >
                {location.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
