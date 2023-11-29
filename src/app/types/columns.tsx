'use client';

import { Button } from '@/components/ui/button';
import { ArrowsUpDownIcon, CubeIcon } from '@heroicons/react/24/solid';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export type Pokemons = {
  id: string;
  name: string;
  url: string;
};

export const columns: ColumnDef<Pokemons>[] = [
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
        <div className='font-medium text-sky-800'>
          <Link
            href={`/type/${row.getValue('name')}`}
            className='bg-transparent border-0 capitalize'
          >
            <CubeIcon className='inline h-4 w-4 mr-2 text-sky-600' />{' '}
            {row.getValue('name')}
          </Link>
        </div>
      );
    },
  },
];
