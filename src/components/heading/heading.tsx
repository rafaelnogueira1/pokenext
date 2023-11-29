import { cn } from '@/lib/utils';
import Title from '../title/title';

export default function Heading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <Title
      level={1}
      title={title}
      className={cn('text-2xl mt-4 mb-10', className)}
    />
  );
}
