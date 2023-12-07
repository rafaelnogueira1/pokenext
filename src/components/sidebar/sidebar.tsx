import Image from 'next/image';
import Link from 'next/link';
import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  Bars4Icon,
} from '@heroicons/react/24/solid';
import { NAVIGATION } from '@/config/navigation';
import { Pokeball } from './pokeball';
import { MobileMenu } from './mobileMenu';

export default function Sidebar() {
  return (
    <div>
      <div className='bg-primary p-5 flex justify-between items-center md:fixed md:h-screen md:w-60 lg:w-80 md:flex-col'>
        <div className='flex justify-between items-center w-full md:flex-col md:space-y-24'>
          <Link href='/'>
            <Image
              src='/images/logo.png'
              alt='logo'
              width={175}
              height={175}
              className='w-[95px] md:w-[175px]'
            />
          </Link>
          <div className='max-md:flex max-md:space-x-5'>
            <MobileMenu />
            <Pokeball />
          </div>

          <nav className='mt-7 hidden md:block'>
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
        </div>
      </div>
      <div className='hidden bg-transparent md:w-60 lg:w-80 p-5 h-screen md:block' />
    </div>
  );
}
