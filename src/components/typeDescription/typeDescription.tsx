import { cn } from '@/lib/utils';

export default function TypeDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'border border-sky-100 p-8 rounded-2xl bg-white',
        className
      )}
    >
      {children}
    </section>
  );
}
