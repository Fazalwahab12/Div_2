import React from 'react';
import Cartbox from './Cart_box';
import Payment_type from './Payment_type';
import group from '../../../public/public/group.svg';
import Carfeatures from './Car_features';
import Squarebox from './Square_box';
import Image from 'next/image';
import Colour from './Colour';
import Link from 'next/link';
import Squarebox2 from './Square_box2';

const DetailedSearchForm = () => {
  return (
    <div className="bg-[#EDEEF0] h-[2800px]">
      <div className="absolute md:top-[186px] sm:top-16 md:left-[160px] sm:left-10 rounded-lg bg-white w-[294px] h-[2336px] border-[1px]" />
      <h1 className="absolute sm:top-20 md:top-[212px] sm:left-14 md:left-[190px] text-3xl font-semibold text-red-600">
        Detailed Search
      </h1>
      <div className="absolute sm:top-40 md:top-[259.5px] sm:left-14 md:left-[190px] w-[255px] h-2 border-t-[3px] border-solid" />
      <div className="absolute  md:top-[448.5px] md:left-[190px] w-[255px] h-2 border-t-[3px] border-solid" />
      <div className="absolute md:top-[876.5px] md:left-[190px] w-[255px] h-2 border-t-[3px] border-solid" />
      <div className="absolute md:top-[1631.5px] md:left-[190px] box-border w-[255px] h-2 border-t-[3px]" />
      <div className="absolute md:top-[1871.5px] md:left-[190px] box-border w-[255px] h-px border-t-[3px]" />
      <p className="font-semibold text-black absolute sm:top-32 sm:left-16 md:top-[190px] md:left-[190px] w-[254px] h-[157px] text-left text-sm text-blue">
        Mark, model, variant
      </p>

      <div className="absolute sm:top-40 sm:left-14 md:top-[276px] md:left-[190px] w-[254px] h-[157px] text-left text-sm text-blue-500">
        <div className="flex justify-center space-x-[130px]">
          <Cartbox name="Mark" />
          <Cartbox name="Model" />
        </div>
      </div> 
      <div className="  sm:hidden md:block absolute sm:top-64  sm:right-0 sm:left-0 md:top-[360px] md:left-[0px] rounded-lg bg-white w-[254px] h-11 flex flex-row items-center justify-start p-4 border-[1px] border-solid text-blue-800 border-blue-400 mx-[190px]">
        <p className="relative font-medium">Variant</p>
        <Link className="absolute mx-48 top-[50px] [text-decoration:underline] font-medium text-red-500 text-right" href={''}>
          More
        </Link>
      </div>

      <div className=' md:hidden sm:block'>
        
        <Squarebox2 top={'250px'} width={'254px'} left={'55px'} name='Variant'/>
        <Link className="absolute mx-56 sm:top-[298px] [text-decoration:underline] font-medium text-red-500 text-right" href={''}>
          More
        </Link>
      </div>

      <Payment_type />
      <Carfeatures />

      <p className="absolute sm:top-[1050px] sm:left-[50px]  md:top-[1160px] md:left-[190px] text-base font-semibold text-black">
        Wheel drive
      </p>
      <div className="absolute sm:top-[1080px] sm:left-[48px] md:top-[1190px] md:left-[190px] w-[160px] h-[21px]">
        <Squarebox name={'Rear-wheel drive'} />
      </div>
      <div className="absolute sm:top-[1100px] sm:left-[48px] md:top-[1215px] md:left-[190px]  w-[160px] h-[21px]">
        <Squarebox name={'Rear-wheel drive'} />
      </div>
      <div className="absolute sm:top-[1120px] sm:left-[48px] md:top-[1241px] md:left-[190px] left-[190px] w-[160px] h-[21px]">
        <Squarebox name={'Rear-wheel drive'} />
      </div>

      <div>
        <p className="absolute sm:top-[1170px] sm:left-[48px] md:top-[1270px] md:left-[190px] text-base font-semibold text-black">
          Electric vehicles
        </p>
        <p className="absolute sm:top-[1190px] sm:left-[48px] md:top-[1300px] md:left-[190px]  text-base font-semibold text-black">
          Range
        </p>

        <div className="absolute sm:top-[1190px] sm:left-[48px] md:top-[1300px] md:left-[190px] border-blue-500">
          <div className="flex justify-center space-x-[130px]">
            <Cartbox name="" />
            <Cartbox name="" />
          </div>
        </div>

        <p className="absolute sm:top-[1190px] sm:left-[210px] md:top-[1300px] md:left-[320px] text-base font-semibold text-black">
          Charge time
        </p>
      </div>

      <p className="absolute  sm:top-[1290px] sm:left-[48px] md:top-[1400px] md:left-[190px] text-base font-semibold text-black">
        Fast charge time
      </p>
      <div className='absolute sm:top-[1290px] sm:left-[48px] md:top-[1400px] md:left-[190px] border-blue-500'>
        <div className="absolute top-[32px] left-[0px] rounded-lg bg-white w-[255px] h-11 border-[1px] border-solid border-blue-500">

          <Image
            className="absolute top-[0px] left-[218px] w-9 h-11"
            alt=""
            src={group}
          />

        </div>
      </div>

      <p className="absolute  sm:top-[1390px] sm:left-[48px] md:top-[1500px] md:left-[190px] text-base font-semibold text-black">
        Battery capacity
      </p>

      <div className="absolute  sm:top-[1390px] sm:left-[48px] md:top-[1500px] md:left-[190px] border-blue-500">
        <div className="flex justify-center space-x-[130px]">
          <Cartbox name="From kWh" />
          <Cartbox name="Up to kWh" />
        </div>
      </div>

      <Colour />
    </div>
  );
}

export default DetailedSearchForm;
