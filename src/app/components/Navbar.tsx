"use client"
import Image from 'next/image';
import Link from 'next/link';
import primary from '../../../public/public/primary-logo.png'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { MdOutlineNotificationsActive  } from 'react-icons/md';
import { FaStar, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import CarSearchInfo from './CarSearchInfo';
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <>
    <div className=" sm:hidden  md:hidden lg:flex top-0 left-0 bg-white shadow-md w-screen  h-22  flex items-center justify-between px-4">
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
        <Link className="cursor-pointer py-2 px-6 bg-red rounded-lg  bg-red-600" href={'sell'}>
          <span className="text-black text-base font-medium">Sell</span>
        </Link>
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
  <Link className="cursor-pointer py-2 mr-16  px-8 bg-blue rounded-lg  bg-blue-500" href={'/'}>
    <span className="text-black text-base font-medium">Login</span>
  </Link>
</div>
</div>
<span
  onClick={() => setShowMenu(!showMenu)}
  className="text-xl md:hidden bg-white w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer mr-2"
>
  <FiMenu />
</span>
{showMenu && (
  <div
    className="w-[80%] h-screen overflow-scroll absolute top-0 right-0 bg-gray-300 p-4 scrollbar-hide flex flex-col items-center space-y-12"
    style={{ zIndex: 9999 }}
  >
   <CarSearchInfo/>
    <ul className="flex flex-col items-center space-y-12">
      <Link className="relative cursor-pointer flex mt-10" href={''}>
        <span className="cursor-pointer">Search</span>
        <MdOutlineArrowDropDown className="w-6 h-6" />
      </Link>
      <Link href={'/news-and-guides'} className="cursor-pointer text-black">
        News & Guides
      </Link>
      <Link className="cursor-pointer py-2 px-6 bg-red rounded-lg bg-red-600" href={'sell'}>
        <span className="text-black text-base font-medium">Sell</span>
      </Link>
    </ul>

    <div className="flex flex-col items-center space-y-12">
      <div className="relative group">
        <MdOutlineNotificationsActive className="w-6 h-6 cursor-pointer" />
        <MdOutlineArrowDropDown className="w-6 h-6 cursor-pointer absolute top-1/2 -translate-y-1/2 left-6" />
      </div>
      <div className="relative group flex-col space-y-12">
        <FaStar className="w-6 h-6 cursor-pointer" />
        <FaEnvelope className="w-6 h-6 cursor-pointer" />
      </div>
      <Link className="cursor-pointer py-2 mx-4 mr-16 px-8 bg-blue rounded-lg bg-blue-500" href={'/'}>
        <span className="text-black text-base font-medium">Login</span>
      </Link>
    </div>
    
  </div>
  
)}



<span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 md:hidden sm:block right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                style={{ zIndex: 9999 }}
              >
                <MdClose />
                </span>
        </>
  );
};

export default Navbar;
