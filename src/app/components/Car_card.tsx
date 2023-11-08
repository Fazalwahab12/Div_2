import Image from 'next/image';
import React from 'react';
import car from '../../../public/public/white_car.png';

const Carcard = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="flex flex-col  bg-white shadow-[0px_0px_10.4px_rgba(0,_0,_0,_0.4)] border-[0.9px] sm:w-[340.1px]  md:w-[260.1px] md:h-[335.3px]">
        <Image
          className=" sm:w-[340.1px]  md:w-[260.1px] md:h-[200.3px] object-cover"
          alt=""
          src={car}
        />
        <div className=" px-14 pt-1   ">
          <p className='text-black font-extrabold '>Ford Mondeo ST</p>
        <p className="text-red-500 font-bold  ">20,300 €</p>
        
          </div>
      
        <div className=' flex sm:mx-8 md:mx-4'>
          <div className=" px-2 space-y-2 pt-4">
            <h1 className="">Year</h1>
            <p className="">2019</p>
          </div>
          <div className=" px-2 space-y-2 pt-4">
            <h2 className="">Kilometers</h2>
            <p className="">185.000</p>
          </div>
          <div className="px-2 space-y-2 pt-4">
            <p >Engine</p>
            <p >Petrol</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Carcard;
