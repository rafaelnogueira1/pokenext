'use client';

import TableData from '@/components/tableData/tableData';
import { columns } from './columns';

export const columnsTable = [
  {
    accessorKey: 'name',
    accessorFn: (row) => row.version.name,
    header: 'Name',
    cell: ({ getValue }) => {
      return <div className='font-medium text-sky-800 pl-4'>{getValue()}</div>;
    },
  },
];

export function TableDataPokemon({ data }: any) {
  const renderSubComponent = ({ row }: { row: any }) => {
    return (
      <div className='bg-gray-100'>
        <TableData columns={columnsTable} data={row.original.version_details} />
      </div>
    );
  };

  return (
    <TableData
      columns={columns}
      data={data}
      // getRowCanExpand={() => true}
      // renderSubComponent={renderSubComponent}
    />
  );
}
