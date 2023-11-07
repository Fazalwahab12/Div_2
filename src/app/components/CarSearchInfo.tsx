import Link from 'next/link';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const CarSearchInfo = () => {
  return (
    <div className=" max-h-full md:max-h-screen bg-[#EDEEF0]">
      <div className="absolute mx-10 sm:top-10 md:top-[140px] sm:left-5 md:left-[360px] w-[654px] h-5 flex text-blue-800 space-x-3">
      
      <div className='flex flex-col md:flex-row md:space-x-8'>
  <Link href="/" className="relative cursor-pointer flex">
    <span className="cursor-pointer whitespace-nowrap">
      <p className="font-bold ">Home</p>
    </span>
    <MdOutlineArrowForwardIos className="w-5 h-6 sm:hidden space-x-8 md:block" />
  </Link>

  <Link href="/car-search" className="relative cursor-pointer flex">
    <span className="cursor-pointer whitespace-nowrap">
      <p className="font-bold ">My car search</p>
    </span>
    <MdOutlineArrowForwardIos className="w-5 h-6 sm:hidden  md:block" />
  </Link>
</div>

        
<div className='flex flex-col md:flex-row md:space-x-8'>
  <Link href="/" className="relative cursor-pointer flex">
    <span className="cursor-pointer whitespace-nowrap">
      <p className="font-bold text-lg">1,421,546 offers</p>
    </span>
    <MdOutlineArrowForwardIos className="w-5 h-6 sm:hidden  md:block" />
  </Link>

  <Link href="/car-search" className="relative cursor-pointer flex">
    <span className="cursor-pointer whitespace-nowrap">
      <p className="font-bold ">Kia Stonic 1.5 MPI EX URBAN</p>
    </span>
    <MdOutlineArrowForwardIos className="w-5 h-6 sm:hidden  md:block" />
  </Link>
</div>

        
        
      </div>
    </div>
  );
};

export default CarSearchInfo;
