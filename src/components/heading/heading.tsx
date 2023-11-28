import { cn } from '@/lib/utils';

export default function Heading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <header>
      <h1
        className={cn(
          'text-2xl font-heading text-sky-600 uppercase mb-10',
          className
        )}
      >
        {title}
      </h1>
    </header>
  );
}
