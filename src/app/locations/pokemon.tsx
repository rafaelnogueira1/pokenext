import Heading from '@/components/heading/heading';
import Link from 'next/link';

export function PokemonList({ pokemons }: { pokemons: any[] }) {
  return (
    <div className='border border-sky-100 bg-white p-5 rounded-2xl'>
      <Heading title='Pokemons to catch' className='text-yellow-500' />
      <ul className='flex gap-5 flex-wrap'>
        {pokemons.map((entry) => (
          <li
            key={entry.pokemon.name}
            className='border border-sky-100 p-3 rounded-lg'
          >
            <Link href={`/pokemon/${entry.pokemon.name}`}>
              {entry.pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
