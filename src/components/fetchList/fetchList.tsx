import ListData from '@/components/listData/listData';
import Title from '@/components/title/title';
import TypeDescription from '@/components/typeDescription/typeDescription';

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
      <ListData data={results} />
    </TypeDescription>
  );
}
