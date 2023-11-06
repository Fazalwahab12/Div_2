import React from 'react';
import Cartbox from './Cart_box';

const Payment_type = () => {
  const yearSectionTop = 593; // Update with the correct value

  return (
    <>
      <div className="absolute top-[465px] left-[400px] text-base font-semibold text-black">
        Payment type
      </div>
      <div className="absolute top-[501px] left-[526px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-white w-32 h-11 text-blue-500 border-[1px] border-solid border-blue-400">
        <div className="absolute top-[11.5px] left-[16px] font-medium">
          Leasing
        </div>
      </div>
      <div className="absolute top-[501px] left-[400px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-red-500 w-[127px] h-11 text-white border-[1px] border-solid border-red-400">
        <div className="absolute top-[11.5px] left-[16px] font-medium">Buy</div>
      </div>

      <div className="absolute top-[561px] left-[400px] text-base font-semibold text-black">
        Year
      </div>

      <div className="absolute top-[565px] left-[400px]  border-blue-500">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        <Cartbox name="Model" />
       </div>
      </div>
      <div className="absolute top-[650px] left-[400px] text-base font-semibold text-black">
      Kilometers
      </div>

      <div className="absolute top-[655px] left-[400px]  border-blue-500">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="From" />
        <Cartbox name="to" />
       </div>
      </div>
      <div className="absolute top-[745px] left-[400px] rounded-lg bg-red-500 w-[252px] h-[52px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white">
        <img
          className="relative w-4 h-4"
          alt=""
          src="/vuesaxlinearsearchnormal1.svg"
        />
        <div className="relative font-medium">5.221.456 results</div>
      </div>
      <div className="absolute top-[805px] left-[400px] rounded-lg bg-blue-500 w-[252px] h-[52px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white">
        
        <div className="relative font-medium">Save search</div>
      </div>
    </>
  );
}

export default Payment_type;
