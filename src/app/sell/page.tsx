import Image from 'next/image'
import React from 'react'
import car_main from '../../../public/public/car_main.png'
import car2 from '../../../public/public/car2.svg'
import cars from '../../../public/public/car.svg'
import group from '../../../public/public/group.svg'
import Squarebox2 from '../components/Square_box2'

import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className=' mb-[600px]'>
            <Image src={car_main} alt={''}></Image>

    
            <div className="absolute  sm:w-[270px] md:top-[330px] md:left-[40] md:w-[1250px] md:h-[600px] bg-white md:shadow-lg md:mx-12">

      

  <div className="flex items-center ">

    <Image src={car2} alt={''} className=" mx-4 mt-6" />

    <Image src={cars} alt={''} className=" md:px-8 md:pr-10 sm:px-2  sm:mx-2 bg-[#EDEEF0] w-[71rem]   h-16" />

  </div>

  {/*  Squarebox2 for mobile screens */}
 <div className=' sm:block md:hidden'>
<Squarebox2 name="Make" top="100px" left={'10px'} width={'160px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="110px"  />
<Squarebox2 name="Model" top="100px" left={'190px'} width={'160px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="110px"  />
<Squarebox2 name="Variant" top="160px" left={'10px'} width={'160px'}  />

<Link className="absolute top-[160px] left-[190px] rounded-lg bg-red-500 w-[60px] h-[46px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white" href={''}>
        <p className="relative font-medium">Buy</p>
      </Link>
      <Link className="absolute top-[160px] left-[275px] rounded-lg bg-red-500 w-[60px] h-[46px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white" href={''}>
        <p className="relative font-medium">Buy</p>
      </Link>

<Squarebox2 name="Price from" top="220px" left={'10px'} width={'160px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="110px"  />
<Squarebox2 name="Price up to" top="220px" left={'190px'} width={'160px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="110px"  />

<Squarebox2 name="Year from" top="280px" left={'10px'} width={'160px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="110px"  />
<Squarebox2 name="Year up to " top="280px" left={'190px'} width={'160px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="110px"  />      
        



</div>
{/* tablet */}
<div className=' sm:hidden md:block'>
<Squarebox2 name="Make" top="100px" left={'10px'} width={'255px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="180px"  />
<Squarebox2 name="Model" top="100px" left={'280px'} width={'255px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="180px"  />
<Squarebox2 name="Variant" top="100px" left={'550px'} width={'255px'}  />

<Squarebox2 name="Price from" top="160px" left={'10px'} width={'190px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="140px"  />
<Squarebox2 name="Price up to" top="160px" left={'210px'} width={'190px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="140px"  />
<Squarebox2 name="Year from" top="160px" left={'420px'} width={'190px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="140px"  />
<Squarebox2 name="Year up to " top="160px" left={'620px'} width={'190px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="140px"  />      
        
<Squarebox2 name="Fuel type" top="220px" left={'10px'} width={'190px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="140px"  />
<Squarebox2 name="Payment type" top="220px" left={'210px'} width={'190px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="120px"  />

<Squarebox2 name="Payment type" top="220px" left={'620px'} width={'190px'}  />
      <button className="absolute top-[220px] left-[370px] rounded-lg bg-red-500 w-[260px] h-[46px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white">
        <p className="relative font-medium">Buy</p>
      </button>

      <button className="absolute top-[100px] left-[820px] rounded-lg bg-blue-500 w-[180px] h-[46px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white">
        <p className="relative font-medium">Buy</p>
      </button>

      <button className="absolute top-[100px] left-[1060px] rounded-lg bg-red-500 w-[180px] h-[46px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white">
        <p className="relative font-medium">Buy</p>
      </button>
      
      <Squarebox2 name="Vehicle Type" top="160px" left={'820px'} width={'180px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="120px"  />
      <Squarebox2 name="Save Search" top="160px" left={'1060px'} width={'180px'}   />

      <Squarebox2 name="City or ZIP Code" top="220px" left={'820px'} width={'180px'} />
      <Squarebox2 name="Close filters" top="220px" left={'1060px'} width={'180px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="120px"  />
      <div>
      
    </div>
</div>

    <p className="absolute top-[330px] left-[20px] text-base font-semibold text-black">
    Number of seats
      </p>
<div>
      <Squarebox2 name="From" top="360px" left={'5px'} width={'170px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="120px"  />
      <Squarebox2 name="TO" top="360px" left={'185px'} width={'170px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="120px"  />
      </div>
      <div className='sm:hidden md:block'>
      <p className="absolute top-[330px] left-[390px] text-base font-semibold text-black">
      Number of doors
      </p>
<div className='absolute top-[330px] left-[390px] border-blue-500'>
      <div className="absolute top-[32px] left-[0px] rounded-lg bg-white  w-[255px] h-11 border-[1px] border-solid border-blue-500">
        <h1 className="absolute top-[11.5px] left-[16px] font-medium">
        4
        </h1>
        <Image
          className="absolute top-[0px] left-[218px] w-9 h-11"
          alt=""
          src={group}
        />
        
      </div>
      </div>
</div>

      <p className="absolute top-[330px] left-[660px] text-base font-semibold text-black">
      Type and condition
      </p>
<div className='absolute top-[330px] left-[660px] border-blue-500'>
      <div className="absolute top-[32px] left-[0px] rounded-lg bg-white  w-[255px] h-11 border-[1px] border-solid border-blue-500">
        <h1 className="absolute top-[11.5px] left-[16px] font-medium">
        ANY
        </h1>
        <Image
          className="absolute top-[0px] left-[218px] w-9 h-11"
          alt=""
          src={group}
        />
      
      </div>

      </div>

        
      <p className="absolute top-[330px] left-[940px] text-base font-semibold text-black">
      Power
      </p>
<div>
      <Squarebox2 name="from" top="360px" left={'940px'} width={'140px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="100px"  />
      <Squarebox2 name="to" top="360px" left={'1100px'} width={'140px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="100px"  />
      </div>
      

      <p className="absolute top-[430px] left-[10px] text-base font-semibold text-black">
      Leasing Duration
      </p>
<div>
      <Squarebox2 name="from" top="460px" left={'5px'} width={'170px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="100px"  />
      <Squarebox2 name="to" top="460px" left={'185px'} width={'170px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="100px"  />
      </div>


<div className='sm:hidden md:block'>
      <p className="absolute   top-[430px] left-[380px] text-base font-semibold text-black">
      Leasing Kilometers per year
      </p>
<div>
      <Squarebox2 name="from" top="460px" left={'380px'} width={'140px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="100px"  />
      <Squarebox2 name="to" top="460px" left={'530px'} width={'140px'} icon={<RiArrowDropDownLine />} iconSize="50px" iconLeft="100px"  />
      </div>


      <p className="absolute top-[430px] left-[680px] text-base font-semibold text-black">
      Origin of the vehicle
      </p>
<div className='absolute top-[428px] left-[680px] border-blue-500'>
      <div className="absolute top-[32px] left-[0px] rounded-lg bg-white  w-[255px] h-11 border-[1px] border-solid border-blue-500">
        <p className="absolute top-[11.5px] left-[16px] font-medium">
        Home plates
        </p>
        <Image
          className="absolute top-[0px] left-[218px] w-9 h-11"
          alt=""
          src={group}
        />
        
      </div>
      </div>
      </div>

      <p className="absolute top-[430px] left-[980px] text-base font-semibold text-black">
      Ownership
      </p>
<div className='absolute top-[428px] left-[980px] border-blue-500'>
      <div className="absolute top-[32px] left-[0px] rounded-lg bg-white  w-[255px] h-11 border-[1px] border-solid border-blue-500">
      
        <Image
          className="absolute top-[0px] left-[218px] w-9 h-11"
          alt=""
          src={group}
        />
        
      </div>
      </div>

      </div>
    </div> 
    </div>
  )
}

export default page