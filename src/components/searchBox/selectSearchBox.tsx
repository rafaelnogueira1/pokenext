'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function SelectSearchBox() {
  const type = useRef('');
  const search = useRef('');
  const { push } = useRouter();

  const handleSearch = async (e: any) => {
    e.preventDefault();

    push(`/${type.current}/${search.current}`);
  };

  return (
    <div className='rounded-2xl border border-sky-100 p-5 bg-white w-full'>
      <form className='flex space-x-3' onSubmit={handleSearch}>
        <Select name='type' onValueChange={(value) => (type.current = value)}>
          <SelectTrigger className='w-[280px]'>
            <SelectValue placeholder='Select a type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='pokemon'>Pokemon</SelectItem>
            <SelectItem value='type'>Type</SelectItem>
            <SelectItem value='ability'>Abilitity</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type='text'
          name='search'
          onChange={(e) => (search.current = e.target.value)}
        />
        <Button type='submit' className='w-1/4 h-12 rounded-full'>
          Search
        </Button>
      </form>
    </div>
  );
}
