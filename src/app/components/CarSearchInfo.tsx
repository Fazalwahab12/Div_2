import Link from 'next/link';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const CarSearchInfo = () => {
  return (
    <div className=" max-h-full md:max-h-screen bg-[#EDEEF0]">
      <div className="absolute top-[140px] left-[360px] w-[654px] h-5 flex text-blue-800 space-x-3">
        <Link href="/" className="relative cursor-pointer flex">
          <span className="cursor-pointer whitespace-nowrap">
            <p className="font-bold text-lg">Home</p>
          </span>
          <MdOutlineArrowForwardIos className="w-5 h-6" />
        </Link>

        <Link href="/car-search" className="relative cursor-pointer flex">
          <span className="cursor-pointer whitespace-nowrap">
            <p className="font-bold text-lg">My car search</p>
          </span>
          <MdOutlineArrowForwardIos className="w-5 h-6" />
        </Link>

        <Link href="/offers" className="relative cursor-pointer flex">
          <span className="cursor-pointer whitespace-nowrap">
            <p className="font-bold text-lg">1,421,546 offers</p>
          </span>
          <MdOutlineArrowForwardIos className="w-5 h-6" />
        </Link>

        <Link href="/kia-stonic" className="relative cursor-pointer flex">
          <span className="cursor-pointer whitespace-nowrap">
            <p className="font-bold text-lg">Kia Stonic 1.5 MPI EX URBAN A/T</p>
          </span>
          <MdOutlineArrowForwardIos className="w-5 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default CarSearchInfo;
