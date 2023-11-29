import Image from 'next/image';
import Link from 'next/link';
import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';

const MENU = [
  { name: 'Home', url: '/' },
  { name: 'Pokemons', url: '/pokemons' },
  { name: 'Types', url: '/types' },
  { name: 'Abilities', url: '/abilities' },
];

export default function Sidebar() {
  return (
    <>
      <div className='bg-primary p-5 w-80 h-screen flex flex-col justify-between items-center fixed'>
        <div className='space-y-24 items-center flex flex-col'>
          <XMarkIcon className='w-7 h-7 text-white' />

          <div>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt='logo'
                width={175}
                height={175}
              />
            </Link>
          </div>

          <nav className='mt-7'>
            <ul className='space-y-3 flex flex-col'>
              {MENU.map((menu) => (
                <li key={menu.name}>
                  <Link href={menu.url} className='text-white uppercase'>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <Link href='/logout'>
            <ArrowRightOnRectangleIcon className='w-7 h-7 text-white' />
          </Link>
        </div>
      </div>
      <div className='bg-transparent w-80 p-5 h-screen' />
    </>
  );
}
