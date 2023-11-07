import React from 'react';
import Cartbox from './Cart_box';
import Payment_type from './Payment_type';
import group from '../../../public/public/group.svg'

import Carfeatures from './Car_features';
import Squarebox from './Square_box';
import Image from 'next/image';
import Colour from './Colour';
import Link from 'next/link';

const DetailedSearchForm = () => {
  return (
    <div className="bg-[#EDEEF0] h-[2800px]">
      <div className="absolute top-[186px] left-[160px] rounded-lg bg-white  w-[294px] h-[2336px] border-[1px] " />
      <h1 className="absolute top-[212px] left-[190px] text-3xl font-semibold text-red-600">
        Detailed Search
      </h1>
      <div className="absolute top-[259.5px] left-[190px]  w-[255px] h-2 border-t-[3px] border-solid  " />
      <div className="absolute top-[448.5px] left-[190px]  w-[255px] h-2 border-t-[3px] border-solid " />
      <div className="absolute top-[876.5px] left-[190px] w-[255px] h-2 border-t-[3px] border-solid "/>
      <div className="absolute top-[1631.5px] left-[190px] box-border w-[255px] h-2 border-t-[3px] " />
      <div className="absolute top-[1871.5px] left-[190px] box-border w-[255px] h-px border-t-[3px] " />
      <p className="font-semibold text-black absolute top-[190px] left-[190px] w-[254px] h-[157px] text-left text-sm text-blue ">
        Mark, model, variant
      </p>
      
      <div className="absolute top-[276px] left-[190px] w-[254px] h-[157px] text-left text-sm text-blue-500 ">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        <Cartbox name="Model" />
       </div>
      </div>
     <div className="absolute top-[360px] left-[0px] rounded-lg bg-white  w-[254px] h-11 flex flex-row items-center justify-start p-4 border-[1px] border-solid text-blue-800  border-blue-400 mx-[190px] ">
        <p className="relative font-medium">Variant</p>
        <Link className="absolute mx-48 top-[50px]  [text-decoration:underline] font-medium text-red-500 text-right" href={''}>
        More
      </Link>
      </div>
     <Payment_type/>
     <Carfeatures/>

     <p className="absolute top-[1160px] left-[190px] text-base font-semibold text-black">
     Wheel drive
      </p>
     <div className="absolute top-[1190px] left-[190px] w-[160px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute top-[1215px] left-[190px] w-[160px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute top-[1241px] left-[190px] w-[160px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>

<div>
      <p className="absolute top-[1270px] left-[190px] text-base font-semibold text-black">
      Electric vehicles
      </p>
      <p className="absolute top-[1300px] left-[190px] text-base font-semibold text-black">
      Range
      </p>

      <div className="absolute top-[1300px] left-[190px] border-blue-500">
        <div className="flex justify-center space-x-[130px]">
          <Cartbox name="" />
          <Cartbox name="" />
        </div>
      </div>

      <p className="absolute top-[1300px] left-[330px] text-base font-semibold text-black">
      Charge time
      </p>
      </div>


<p className="absolute top-[1400px] left-[190px] text-base font-semibold text-black">
Fast charge time
      </p>
<div className='absolute top-[1400px] left-[190px] border-blue-500'>
      <div className="absolute top-[32px] left-[0px] rounded-lg bg-white  w-[255px] h-11 border-[1px] border-solid border-blue-500">
        
        <Image
          className="absolute top-[0px] left-[218px] w-9 h-11"
          alt=""
          src={group}
        />
        
      </div>
      </div>

      <p className="absolute top-[1500px] left-[190px] text-base font-semibold text-black">
      Battery capacity
      </p>

      <div className=" absolute top-[1500px] left-[190px] border-blue-500">
        <div className="flex justify-center space-x-[130px]">
          <Cartbox name="From kWh" />
          <Cartbox name="Up to kWh" />
        </div>
      </div>

      <Colour/>
    </div>
  );
}

export default DetailedSearchForm;