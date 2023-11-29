'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ArrowsUpDownIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export type Pokemons = {
  id: string;
  name: string;
  url: string;
};

const TableHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('text-center', className)}>{children}</div>;
};

const TableCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'font-medium text-sky-800 capitalize text-center',
        className
      )}
    >
      {children}
    </div>
  );
};
export const columns: ColumnDef<Pokemons>[] = [
  {
    accessorKey: 'order',
    header: () => <TableHeader>Order</TableHeader>,
    cell: ({ row }) => <TableCell>{row.getValue('order')}</TableCell>,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Names
          <ArrowsUpDownIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='font-medium text-sky-800 pl-4'>
          <Link
            href={`/pokemon/${row.getValue('name')}`}
            className='bg-transparent border-0 capitalize'
          >
            {row.getValue('name')}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'species',
    header: () => <TableHeader>Species</TableHeader>,
    cell: ({ row }) => <TableCell>{row.getValue('species')}</TableCell>,
  },
  {
    accessorKey: 'shape',
    header: () => <TableHeader>Shape</TableHeader>,
    cell: ({ row }) => <TableCell>{row.getValue('shape')}</TableCell>,
  },
  {
    accessorKey: 'habitat',
    header: () => <TableHeader>Habitat</TableHeader>,
    cell: ({ row }) => <TableCell>{row.getValue('habitat')}</TableCell>,
  },
  {
    accessorKey: 'capture_rate',
    header: () => <TableHeader>Capture Rate</TableHeader>,
    cell: ({ row }) => <TableCell>{row.getValue('capture_rate')}</TableCell>,
  },
  {
    accessorKey: 'is_legendary',
    header: () => <TableHeader>Legendary</TableHeader>,
    cell: ({ row }) => {
      return (
        <TableCell>
          {row.getValue('is_legendary') ? (
            <CheckIcon className='inline h-4 w-4 mr-2 text-green-600' />
          ) : (
            <XMarkIcon className='inline h-4 w-4 mr-2 text-red-600' />
          )}
        </TableCell>
      );
    },
  },
  {
    accessorKey: 'is_mythical',
    header: () => <TableHeader>Mythical</TableHeader>,
    cell: ({ row }) => {
      return (
        <TableCell>
          {row.getValue('is_mythical') ? (
            <CheckIcon className='inline h-4 w-4 mr-2 text-green-600' />
          ) : (
            <XMarkIcon className='inline h-4 w-4 mr-2 text-red-600' />
          )}
        </TableCell>
      );
    },
  },
];
