import React from 'react'
import Carcard from './Car_card'
import redcar1 from '../../../public/public/redcar.png'
import redcar3 from '../../../public/public/redcar3.png'
import redcar2 from '../../../public/public/readcar2.png'
import Carform from './Car_form'
import Image from 'next/image'

const Car = () => {
  return (
    <div>
      
      <div className="absolute top-[189px] left-[690px] rounded-lg bg-white box-border w-[866px] h-[2465px] border-[1px]" />
      <div className="absolute top-[220px] left-[710.9px] w-[260.1px] h-[329.1px] text-left text-xl-8  font-poppins">
      <Carcard/>
      </div>
      <div className="absolute top-[220px] left-[990.9px] w-[260.1px] h-[329.1px] text-left text-xl-8  font-poppins">
      <Carcard/>
      </div>
      <div className="absolute top-[220px] left-[1270.9px] w-[260.1px] h-[329.1px] text-left text-xl-8  font-poppins">
      <Carcard/>
      </div>



{/*  first car */}
      <div className="absolute top-[559px] left-[714px] w-[818px] h-[316px] text-left text-[11.93px] text-body-text font-poppins">
      <Carform/>
      </div>


{/*  second car */}
<div className="absolute top-[890px] left-[714px] w-[818px] h-[316px] text-left text-[11.93px] text-body-text font-poppins">
      <Carform/>
      </div>


{/* 3 number car */}
<div className="absolute top-[1223px] left-[714px] w-[818px] h-[316px] text-left text-[11.93px] text-body-text font-poppins">
      <Carform/>
      </div>

{/* four number car */}
<div className="absolute top-[1555px] left-[714px] w-[818px] h-[316px] text-left text-[11.93px] text-body-text font-poppins">
      <Carform/>
      
      </div>
      <div className="absolute top-[1880px] left-[722px] w-[315px] h-[74.6px]">
        <Image
          className="absolute top-[0px] left-[213.4px] rounded-[5.14px] w-[101.6px] h-[74.6px] object-cover"
          alt=""
        src={redcar1}
        />
        <Image
          className="absolute top-[0px] left-[0px] rounded-[5.14px] w-[101.6px] h-[74.6px] object-cover"
          alt=""
          src={redcar2}
        />
        <Image
          className="absolute top-[0px] left-[106.7px] rounded-[5.14px] w-[101.6px] h-[74.6px] object-cover"
          alt=""
        src={redcar3}
        />
      </div>
      <div className="absolute top-[1920px] left-[1045px] w-[467px] h-[31px]  text-blue-500">
        <div className="absolute top-[0px] left-[0px] w-[320px] space-x-4 h-[31px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-blue-300  flex flex-row items-center justify-center py-2 px-4">
            <div className="relative">Damaged</div>
          </div>
          <div className="absolute top-[0px] left-[91px] rounded-lg bg-blue-300 flex  flex-row items-center mx-6 justify-center py-2 px-4">
            <div className="relative">(Not)Registered</div>
          </div>
          <div className="absolute top-[0px] left-[211px]  rounded-lg bg-blue-300 flex flex-row items-center justify-center py-2 px-4  ">
            <div className="relative">Guarantee</div>
          </div>
        </div>
        <div className="absolute top-[7px] left-[385px]   w-[82px] h-[18px] text-[11.93px] text-black">
          <div className="absolute top-[0px] left-[22px]">Prigrevica</div>
          <img
            className="absolute top-[0px] left-[0px] w-[18px] h-[18px]"
            alt=""
            src="/vuesaxlinearlocation.svg"
          />
        </div>
      </div>



{/* five nuber car */}
<div className="absolute top-[1970px] left-[714px] w-[818px] h-[316px] text-left text-[11.93px] text-body-text font-poppins">
      <Carform/>
      </div>

{/* six number car */}
      <div className="absolute top-[2302px] left-[714px] w-[818px] h-[316px] text-left text-[11.93px] text-body-text font-poppins">
      <Carform/>
      </div>

      


    
      

    </div>
  
  )
}

export default Car