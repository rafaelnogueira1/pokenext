import Heading from '@/components/heading/heading';
import { List } from './list';

export default async function Locations() {
  const locations = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/location-area/?limit=100000&offset=0`
  )
    .then((res: Response) => {
      return res.json();
    })
    .then((res) => {
      return res.results;
    });

  return (
    <div className='p-5'>
      <Heading title='Locations' />
      <List locations={locations} />
    </div>
  );
}
