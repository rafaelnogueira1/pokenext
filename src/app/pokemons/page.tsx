import Heading from '@/components/heading/heading';
import { columns } from './columns';
import TableData from '@/components/tableData/tableData';

export default async function Pokemons() {
  const pokemons = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pokemon?limit=150&offset=0`
  ).then(async (res: Response) => {
    const { results } = await res.json();
    return results;
  });

  const species = await Promise.all(
    pokemons.map(
      async (pokemon: any) =>
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/pokemon-species/${pokemon.name}`
        ).then((res: Response) => {
          return res.json();
        })
    )
  );

  const data = species.flatMap((specie) => {
    return specie.varieties.map((entry: any) => ({
      name: entry.pokemon.name,
      species: specie.name,
      is_legendary: specie.is_legendary,
      is_mythical: specie.is_mythical,
      shape: specie.shape.name,
      habitat: specie.habitat.name,
      capture_rate: specie.capture_rate,
      order: specie.order,
    }));
  });

  return (
    <>
      <Heading title='Pokemons' />
      <TableData columns={columns} data={data} />
    </>
  );
}
