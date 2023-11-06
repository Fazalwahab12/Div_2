import React from 'react';
import Cartbox from './Cart_box';
import Payment_type from './Payment_type';
import group from '../../../public/public/group.svg'

import Carfeatures from './Car_features';
import Squarebox from './Square_box';
import Image from 'next/image';
import Colour from './Colour';

const DetailedSearchForm = () => {
  return (
    <div className="h-screen bg-[#EDEEF0]">
      <div className="absolute top-[186px] left-[380px] rounded-lg bg-white  w-[294px] h-[2336px] border-[1px] border-solid border-stroke" />
      <div className="absolute top-[212px] left-[400px] text-3xl font-semibold text-red-600">
        Detailed Search
      </div>
      <div className="absolute top-[259.5px] left-[399.5px]  w-[255px] h-2 border-t-[3px] border-solid  " />
      <div className="absolute top-[448.5px] left-[399.5px]  w-[255px] h-2 border-t-[3px] border-solid " />
      <div className="absolute top-[876.5px] left-[399.5px] w-[255px] h-2 border-t-[3px] border-solid "/>
      <div className="absolute top-[1631.5px] left-[399.5px] box-border w-[255px] h-2 border-t-[3px] " />
      <div className="absolute top-[1871.5px] left-[399.5px] box-border w-[255px] h-px border-t-[3px] " />
      <div className="font-semibold text-black absolute top-[270px] left-[400px] w-[254px] h-[157px] text-left text-sm text-blue font-poppins">
        Mark, model, variant
      </div>
      
      <div className="absolute top-[276px] left-[400px] w-[254px] h-[157px] text-left text-sm text-blue-500 font-poppins">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        <Cartbox name="Model" />
       </div>
      </div>
     <div className="absolute top-[360px] left-[0px] rounded-lg bg-white  w-[254px] h-11 flex flex-row items-center justify-start p-4 border-[1px] border-solid text-blue-800  border-blue-400 mx-[400px] ">
        <div className="relative font-medium">Variant</div>
        <div className="absolute mx-48 top-[50px]  [text-decoration:underline] font-medium text-red-500 text-right">
        More
      </div>
      </div>
     <Payment_type/>
     <Carfeatures/>

     <div className="absolute top-[1160px] left-[400px] text-base font-semibold text-black">
     Wheel drive
      </div>
     <div className="absolute top-[1190px] left-[400px] w-[160px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute top-[1215px] left-[400px] w-[160px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute top-[1241px] left-[400px] w-[160px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>

<div>
      <div className="absolute top-[1270px] left-[400px] text-base font-semibold text-black">
      Electric vehicles
      </div>
      <div className="absolute top-[1300px] left-[400px] text-base font-semibold text-black">
        Fuel Type
      </div>

      <div className="absolute top-[1300px] left-[400px] border-blue-500">
        <div className="flex justify-center space-x-[130px]">
          <Cartbox name="" />
          <Cartbox name="" />
        </div>
      </div>

      <div className="absolute top-[1300px] left-[530px] text-base font-semibold text-black">
        Vehicle type
      </div>
      </div>


<div className="absolute top-[1400px] left-[400px] text-base font-semibold text-black">
Fast charge time
      </div>
<div className='absolute top-[1400px] left-[400px] border-blue-500'>
      <div className="absolute top-[32px] left-[0px] rounded-lg bg-white  w-[255px] h-11 border-[1px] border-solid border-blue-500">
        
        <Image
          className="absolute top-[0px] left-[218px] w-9 h-11"
          alt=""
          src={group}
        />
        
      </div>
      </div>

      <div className="absolute top-[1500px] left-[400px] text-base font-semibold text-black">
      Power (hp)
      </div>

      <div className=" absolute top-[1500px] left-[400px] border-blue-500">
        <div className="flex justify-center space-x-[130px]">
          <Cartbox name="Diese" />
          <Cartbox name="Coupe" />
        </div>
      </div>

      <Colour/>
    </div>
  );
}

export default DetailedSearchForm;