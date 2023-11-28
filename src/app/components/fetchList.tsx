import Link from 'next/link';

export default async function FetchList({
  title,
  pathName,
  limit = 10,
}: {
  title: string;
  pathName: 'pokemon' | 'type' | 'ability';
  limit: number;
}) {
  const pokemons = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${pathName}?limit=${limit}`
  ).then((res: Response) => {
    return res.json();
  });

  return (
    <div className='border border-sky-100 p-5 rounded-2xl bg-white'>
      <h2 className='text-xl font-heading text-primary mb-4'>{title}</h2>
      <ul className='space-y-3'>
        {pokemons.results.map((pokemon: any) => (
          <li key={pokemon.name}>
            <Link
              href={`${pathName}/${pokemon.name}`}
              className='text capitalize'
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
