import Image from 'next/image';
import Link from 'next/link';
import primary from '../../../public/public/primary-logo.png'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { MdOutlineNotificationsActive  } from 'react-icons/md';
import { FaStar, FaEnvelope } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-white shadow-md w-screen  h-22  flex items-center justify-between px-4">
      <Link href="/" className="flex items-center">
          <Image
           src={primary}
            alt="Logo"
            className="w-36 h-20 object-cover"
          />
      </Link>
      <ul className="flex items-center space-x-6 ">
      <Link className="relative   cursor-pointer flex" href={''}>
    <span className="cursor-pointer">Search</span>
    <MdOutlineArrowDropDown className="w-6 h-6" /> 
  </Link>
        <Link href={'/news-and-guides'}  className="cursor-pointer text-black" >
            News & Guides
        </Link>
        <button className="cursor-pointer py-2 px-6 bg-red rounded-lg  bg-red-600">
          <span className="text-black text-base font-medium">Sell</span>
        </button>
      </ul>
      
      <div className="flex items-center space-x-4">
  <div className="relative group ">
    <MdOutlineNotificationsActive className="w-6 h-6 cursor-pointer" />
    <MdOutlineArrowDropDown className="w-6 h-6 cursor-pointer absolute top-1/2 -translate-y-1/2 left-6" />
    
  </div>
  <div className="relative group flex px-6 space-x-2">
  <FaStar className="w-6 h-6 cursor-pointer" />
  <FaEnvelope className="w-6 h-6 cursor-pointer" />
</div>
  <button className="cursor-pointer py-2  px-8 bg-blue rounded-lg  bg-blue-500">
    <span className="text-black text-base font-medium">Login</span>
  </button>
</div>
    </nav>
  );
};

export default Navbar;
