import React from 'react';
import Cartbox from './Cart_box';
import Link from 'next/link';


const Payment_type = () => {
  

  return (
    <>
      <h1 className="absolute sm:left-[48px] sm:top-[379px] md:top-[465px] md:left-[190px] text-base font-semibold text-black">
        Payment type
      </h1>
      <div className="absolute sm:top-[410px] sm:left-[170px] md:top-[501px] md:left-[300px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-white w-32 h-11 text-blue-500 border-[1px] border-solid border-blue-400">
        <p className="absolute top-[11.5px] left-[16px] font-medium">
          Leasing
        </p>
      </div>
      <div className="absolute sm:top-[410px] sm:left-[48px] md:top-[501px] md:left-[190px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-red-500 w-[127px] h-11 text-white border-[1px] border-solid border-red-400">
        <Link className="absolute top-[11.5px] left-[16px] font-medium" href={'/'}>Buy</Link>
      </div>

      <p className="absolute sm:top-[470px] sm:left-[48px] md:top-[550px] md:left-[190px] text-base font-semibold text-black">
        Year
      </p>

      <div className="absolute md:top-[565px] sm:top-[470px] sm:left-[48px]  md:left-[190px]  border-blue-500">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        <Cartbox name="Model" />
       </div>
      </div>

      <p className="absolute sm:top-[560px] sm:left-[48px] md:top-[650px] md:left-[190px] text-base font-semibold text-black">
      Kilometers
      </p>

      <div className="absolute sm:top-[560px] sm:left-[48px]   md:top-[655px] md:left-[190px]  border-blue-500">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="From" />
        <Cartbox name="to" />
       </div>
      </div>
      
      <div className="absolute sm:top-[690px] sm:left-[48px]  md:top-[805px] md:left-[190px] rounded-lg bg-blue-500 w-[252px] h-[52px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white">
        
        <p className="relative font-medium">Save search</p>
      </div>
    </>
  );
}

export default Payment_type;
