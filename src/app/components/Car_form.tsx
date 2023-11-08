import React from 'react';
import Image from 'next/image';
import redcar from '../../../public/public/redcar.png';


const Carform = () => {
  return (
    <div className=' sm:bg-[#EDEEF0] sm:shadow-[0px_0px_10.4px_rgba(0,_0,_0,_0.4)] sm:mt-2 md:mx-10'>
    <div className="flex flex-col lg:flex-row bg-[#EDEEF0] md:mt-4 sm:pt-8     ">
      <div className=" lg:w-[300px]   rounded-lg     ">
        <Image
          className=" sm:px-8 md:px-0 "
          alt=""
          src={redcar}
        />
      </div>

      <div className=" sm:mt-5  mx-4  mb-5 ">
        <div className=' flex '>
        <h1 className=" font-bold">Volkswagen Polo 1.2 TDI</h1>
        <h2 className=" mx-16">Date Published: 12/10/2023</h2>
        </div>

        <div className=' flex gap-6 mb-3'>
        <p className=" font-bold text-red-600">20,300 €</p>
        <p className="">20,300 €</p>
        </div>
        <p className=" mb-4">+ Omregistrering</p>

        
   
<div>
      <div className=" flex md:space-x-5">
        <div className=" flex-col  space-y-2 mb-4">
          <h3>Vehicle type</h3>
          <h2 className=" font-bold">Sedan</h2>
        </div>
        <div className=" flex-col  space-y-2 mb-4 ">
          <p>Kilometers</p>
          <p className=" font-bold">150,000 km</p>
        </div>
         <div className=" flex-col  space-y-2 mb-4">
          <p>Manufacture year</p>
          <p className="font-bold">2019</p>
        </div>
        <div className=" flex-col  space-y-2 mb-4">
          <p>Gearbox type</p>
          <p className=" font-bold">Auto</p>
        </div>
        </div>   

        <div className='flex md:space-x-8 gap-5' >
          <div className=" flex-col  space-y-4 mb-4">
          <p>HP/kW</p>
          <p className="font-bold">55/75</p>
        </div>
        <div className=" sm:flex-col  space-y-2 mb-4">
          <p>Doors number</p>
          <p className="font-bold">4</p>
        </div>
        
        <div className=" flex-col  space-y-2 mb-4">
          <p>cm3</p>
          <p className="font-bold">2000</p>
        </div>
       
        <div className=" flex-col  space-y-2 mb-4">
          <p>Fuel type</p>
          <p className="font-bold">Diesel</p>
        </div>
        </div>
      </div>
    </div>
 </div>
 </div>
  )
}
export default Carform;
