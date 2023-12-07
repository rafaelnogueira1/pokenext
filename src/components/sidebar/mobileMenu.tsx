import { Bars4Icon } from '@heroicons/react/24/solid';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { NAVIGATION } from '@/config/navigation';
import Link from 'next/link';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden'>
        <Bars4Icon className='w-8 h-8 text-white' />
      </SheetTrigger>
      <SheetContent side='top' className='bg-primary p-5 text-white'>
        <nav className='mt-7 md:block'>
          <ul className='space-y-3 flex flex-col items-center'>
            {NAVIGATION.map((menu) => (
              <li key={menu.name}>
                <Link href={menu.url} className='text-white uppercase'>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
