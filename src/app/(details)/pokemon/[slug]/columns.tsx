'use client';

import { Button } from '@/components/ui/button';

import {
  ArrowsUpDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'name',
    // accessorFn: (row) => row.location_area.name,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Location
          <ArrowsUpDownIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row, getValue }) => {
      return (
        <div className='font-medium text-sky-800 pl-4'>
          {row.getCanExpand() ? (
            <Button variant='ghost' onClick={() => row.toggleExpanded()}>
              {row.getIsExpanded() ? (
                <ChevronDownIcon className='h-4 w-4 text-sky-600' />
              ) : (
                <ChevronRightIcon className='h-4 w-4 text-sky-600' />
              )}
              <>{getValue()}</>
            </Button>
          ) : (
            <div className='flex items-center'>
              <MapPinIcon className='h-4 w-4 text-sky-600 mr-2' />
              <>{getValue()}</>
            </div>
          )}
        </div>
      );
    },
  },
];
