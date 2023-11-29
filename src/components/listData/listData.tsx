import { cn } from '@/lib/utils';

export default function ListData({
  data,
  property = 'name',
  className,
}: {
  data: [];
  property?: string;
  className?: string;
}) {
  return (
    <ul className={cn('space-y-2', className)}>
      {data.map((item: any) => (
        <li key={item[property]} className='capitalize'>
          {item[property]}
        </li>
      ))}
    </ul>
  );
}
