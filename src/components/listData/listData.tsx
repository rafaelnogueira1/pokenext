export default function ListData({ data }: { data: [] }) {
  return (
    <ul className='space-y-1'>
      {data.map((item: any) => (
        <li key={item.name} className='capitalize'>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
