import React from 'react'
import Squarebox from './Square_box'
import Image from 'next/image'
import groups from '../../../public/public/group-colur.svg'
const Colour = () => {
  return (
    <div>
<div className="absolute   sm:top-[1540px] sm:left-[48px] md:top-[1648px] md:left-[190px] font-semibold text-black">
        Exterior Colour
      </div> 
      <Image
        className="absolute  sm:top-[1580px] sm:left-[48px] md:top-[1681px] md:left-[190px] w-[254px] h-[59.8px]"
        alt=""
      src={groups}
      />


      <div className="absolute  sm:top-[1670px] sm:left-[48px] md:top-[1773px] md:left-[190px] font-semibold text-black">
        Wheel set
      </div>
      <div className="absolute  sm:top-[1700px] sm:left-[48px] md:top-[1800px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'One set of wheels'}/>
      </div>
      <div className="absolute  sm:top-[1730px] sm:left-[48px] md:top-[1825px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>

      <div className="absolute sm:top-[1760px] sm:left-[48px] md:top-[1888px] md:left-[190px] font-semibold text-black">
        Equipment
      </div>
      <div className="absolute  sm:top-[1790px] sm:left-[48px] md:top-[1920px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute   sm:top-[1820px] sm:left-[48px] md:top-[1950px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
    
      <div className="absolute sm:top-[1910px] sm:left-[48px] md:top-[1980px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      
      <div className="absolute  sm:top-[1860px] sm:left-[48px] md:top-[2090px] md:left-[190px] font-semibold text-black">
        Area
      </div>
      <div className="absolute sm:top-[1990px] sm:left-[48px] md:top-[2120px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute sm:top-[1960px] sm:left-[48px] md:top-[2150px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute  sm:top-[1990px] sm:left-[48px] md:top-[2180px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute ] sm:top-[1120px] sm:left-[48px] md:top-[2210px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute  sm:top-[2030px] sm:left-[48px] md:top-[2240px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute  sm:top-[2070px] sm:left-[48px] md:top-[2280px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>

      <div className="absolute sm:top-[2100px] sm:left-[48px] md:top-[2300px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute  sm:top-[2130px] sm:left-[48px] md:top-[2330px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute sm:top-[2160px] sm:left-[48px] md:top-[2360px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute  sm:top-[2190px] sm:left-[48px] md:top-[2390px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div> 
      <div className="absolute  sm:top-[300px] sm:left-[52px] md:top-[410px] md:left-[190px] w-[170px] h-[21px]">
       <Squarebox name={'Rear-wheel drive'}/>
      </div>
      <div className="absolute  sm:top-[2290px] sm:left-[48px] md:top-[2469px] md:left-[190px] text-3xl font-semibold font-lorax text-red-500">
        Detailed Search
      </div>
      </div>
  )
}

export default Colour