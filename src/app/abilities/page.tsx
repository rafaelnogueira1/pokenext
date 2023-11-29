import Heading from '@/components/heading/heading';
import { columns } from './columns';
import TableData from '@/components/tableData/tableData';

export default async function Pokemons() {
  const { results } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ability?limit=9999`
  ).then((res: Response) => {
    return res.json();
  });

  return (
    <>
      <Heading title='Abilities' />
      <TableData columns={columns} data={results} />
    </>
  );
}
