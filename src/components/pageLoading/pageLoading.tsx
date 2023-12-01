import Image from 'next/image';

export default function PageLoading() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-white fixed z-50'>
      <Image
        src='/images/loading-pokeball.gif'
        alt='logo'
        width={150}
        height={250}
      />
    </div>
  );
}
