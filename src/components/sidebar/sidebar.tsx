import Image from 'next/image';
import Link from 'next/link';
import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';

const MENU = ['Home', 'Characters', 'Movies', 'Spaceships'];

export default function Sidebar() {
  return (
    <div className='bg-primary p-5 h-full w-3/12 flex flex-col justify-between items-center'>
      <div className='space-y-24 items-center flex flex-col'>
        <XMarkIcon className='w-7 h-7 text-white' />

        <div>
          <Link href='/'>
            <Image
              src='/images/sw-logo.svg'
              alt='logo'
              width={55}
              height={55}
            />
          </Link>
        </div>

        <nav className='mt-7'>
          <ul className='space-y-3 flex flex-col'>
            {MENU.map((menu) => (
              <li key={menu}>
                <Link href='/' className='text-white' key={menu}>
                  {menu}
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
  );
}
