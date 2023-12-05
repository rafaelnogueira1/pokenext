export default function ModalLoading() {
  return (
    <div className='bg-overlay/50 backdrop-opacity-disabled w-full h-full fixed top-0 left-0 flex justify-center items-center'>
      <div className='bg-white rounded-lg w-1/3 h-72 p-5 shadow-lg'>
        The content is loading...
      </div>
    </div>
  );
}
