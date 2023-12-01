import Heading from '@/components/heading/heading';
import { columns } from './columns';
import TableData from '@/components/tableData/tableData';

export default async function Pokemons() {
  const { results } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/type?limit=100000&offset=0`
  ).then((res: Response) => {
    return res.json();
  });

  return (
    <div className='p-5'>
      <Heading title='Types' />
      <TableData columns={columns} data={results} />
    </div>
  );
}
