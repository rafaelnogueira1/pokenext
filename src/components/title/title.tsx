import { cn } from '@/lib/utils';
import { createElement } from 'react';

export default function Title({
  title,
  level = 1,
  className,
}: {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}) {
  return createElement(
    `h${level}`,
    {
      className: cn(
        'text-md text-sky-600 uppercase font-heading mb-4',
        className
      ),
    },
    title
  );
}
