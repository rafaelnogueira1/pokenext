'use client';

import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function BackPage() {
  const { back } = useRouter();

  return (
    <button
      onClick={() => back()}
      className='border-0 bg-transparent flex items-center space-x-1 '
    >
      <ChevronLeftIcon className='w-3 h-3 text-sky-600' />
      <span className='text-sky-600 text-sm'>Go back</span>
    </button>
  );
}
