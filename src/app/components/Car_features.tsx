import React from 'react'
import Cartbox from './Cart_box'
import Image from 'next/image'
import group from '../../../public/public/group.svg'
const Carfeatures = () => {
  return (
    <div className="relative">
      <h1 className="absolute sm:top-[740px] sm:left-[48px] md:top-[820px] md:left-[190px] text-base font-semibold text-black">
        Fuel Type
      </h1>

      <div className="absolute sm:top-[740px] sm:left-[48px] md:top-[820px] md:left-[190px] border-blue-500">
        <div className="flex justify-center space-x-[130px]">
          <Cartbox name="Diese" />
          <Cartbox name="Coupe" />
        </div>
      </div>

      <h2 className="absolute sm:top-[740px] sm:left-[190px] md:top-[820px] md:left-[330px] text-base font-semibold text-black">
        Vehicle type
      </h2>

      <p className="absolute sm:top-[830px] sm:left-[48px] md:top-[920px] md:left-[190px] text-base font-semibold text-black">
      Power (hp)
      </p>

      <div className=" absolute sm:top-[830px] sm:left-[48px] md:top-[920px] md:left-[190px] border-blue-500">
        <div className="flex justify-center space-x-[130px]">
          <Cartbox name="Diese" />
          <Cartbox name="Coupe" />
        </div>
      </div>

      <p className="absolute sm:top-[920px] sm:left-[48px] md:top-[1000px]  md:left-[190px] text-base font-semibold text-black">
      Transmission
      </p>
<div className='absolute sm:top-[920px] sm:left-[48px] md:top-[1000px]  md:left-[190px]  border-blue-500'>
      <div className="absolute top-[32px] left-[0px] rounded-lg bg-white  w-[255px] h-11 border-[1px] border-solid border-blue-500">
        <h1 className="absolute top-[11.5px] left-[16px] font-medium">
        Automatic
        </h1>
        <Image
          className="absolute top-[0px] left-[218px] w-9 h-11"
          alt=""
          src={group}
        />
        
      </div>
      </div>

    </div>
  )
}

export default Carfeatures