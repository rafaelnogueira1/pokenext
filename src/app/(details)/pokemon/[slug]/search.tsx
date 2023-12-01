'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export function Search() {
  const search = useRef('');
  const { push } = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    push(`/pokemon/${search.current}`);
  };

  return (
    <form className='flex space-x-3' onSubmit={handleSearch}>
      <Input
        type='text'
        name='search'
        onChange={(e) => (search.current = e.target.value)}
        placeholder='Search for a pokemon'
      />
      <Button type='submit' className='w-1/4 h-12 rounded-full'>
        Search
      </Button>
    </form>
  );
}
