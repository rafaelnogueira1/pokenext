import Title from '@/components/title/title';
import TypeDescription from '@/components/typeDescription/typeDescription';
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
  const { results } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${pathName}?limit=${limit}`
  ).then((res: Response) => {
    return res.json();
  });

  return (
    <TypeDescription>
      <Title level={2} title={title} />
      <ul className='max-sm:grid max-sm:grid-cols-2 max-sm:gap-2 md:space-y-2'>
        {results.map((entry: any) => (
          <li key={entry.name}>
            <Link
              href={`${pathName}/${entry.name}`}
              className='text capitalize'
            >
              {entry.name}
            </Link>
          </li>
        ))}
      </ul>
    </TypeDescription>
  );
}
