import Image from 'next/image'
import React from 'react'
import redcar from '../../../public/public/redcar.png'
import lineargallery from '../../../public/public/lineargallery.svg'
import linearloction from '../../../public/public/linearlocation.svg'
const Carform = () => {
  return (
    <div >
      <div className="absolute  rounded-lg bg-white box-border w-[818px] h-[316px] border-[1px] " />
      <Image
        className="absolute top-[8px] left-[8px] rounded-[7.57px] w-[315px] h-[300px] object-cover"
        alt=""
        src={redcar}
      />
      <div className="absolute top-[16px] left-[331px] text-xl font-bold text-black inline-block w-[241px]">
        Volkswagen Polo 1.2 TDI
      </div>
      <div className="absolute top-[58px] left-[331px] text-3xl font-bold text-red-500">
        20,300 €
      </div>
      <div className="absolute top-[63px] left-[444px] mx-6 [text-decoration:line-through]">
        20,300 €
      </div>
      <div className="absolute top-[22px] left-[645px] text-right">
        Date Published: 12/10/2023
      </div>
      <div className="absolute top-[95px] left-[331px] text-black">
        + Omregistrering
      </div>
      <div className="absolute top-[274px] left-[249px] rounded  flex flex-row items-center justify-center py-1 px-4 gap-[6px] text-center text-sm text-white">
        <Image
          className="relative w-4 h-4"
          alt=""
          src={lineargallery}
        />
        <div className="relative">15</div>
      </div>
      <div className="absolute top-[131px] left-[331px] w-[413px] h-[81px] ">
        <div className="absolute  w-[62px] h-[81px]">
          <div className="absolute  w-[70px] h-[35px]">
            <div className="absolute ">Vehicle type</div>
            <div className="absolute top-[17px] left-[0px]  font-bold text-black">
              Sedan
            </div>
          </div>
          <div className="absolute top-[46px] left-[0px] w-9 h-[35px]">
            <div className="absolute ">HP/kW</div>
            <div className="absolute top-[17px] left-[0px]  font-bold text-black">
              55/75
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[102px] w-[72px] h-[81px]">
          <div className="absolute  w-[78px] h-[35px]">
            <div className="absolute ">Gearbox type</div>
            <div className="absolute top-[17px] left-[0px]  font-bold text-black">
              Auto
            </div>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[90px] h-[35px]">
            <div className="absolute ">Doors number</div>
            <div className="absolute top-[17px] left-[0px]  font-bold text-black">
              4
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[214px] w-[69px] h-[81px]">
          <div className="absolute  w-[70px] h-[35px]">
            <div className="absolute ">Kilometers</div>
            <div className="absolute top-[17px] left-[0px]  font-bold text-black">
              150,000 km
            </div>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[31px] h-[35px]">
            <div className="absolute ">cm3</div>
            <div className="absolute top-[17px] left-[0px]  font-bold text-black">
              2000
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[323px] w-[90px] h-[81px]">
          <div className="absolute  w-[100px] h-[35px]">
            <div className="absolute ">
              Manufacture year
            </div>
            <div className="absolute top-[17px] left-[0px]  font-bold text-black">
              2019
            </div>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[90px] h-[35px]">
            <div className="absolute ">Fuel type</div>
            <div className="absolute top-[17px] left-[0px]  font-bold text-black">
              Diesel
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[260px] left-[331px] w-[467px] h-[31px] text-3xs text-blue-500">
        <div className="absolute  w-[350px]  h-[31px]">
          <div className="absolute  rounded-lg bg-blue-300 flex flex-row items-center justify-center py-2 px-4">
            <div className="relative">Damaged</div>
          </div>
          <div className="absolute top-[0px] left-[91px]  rounded-lg bg-blue-300 flex flex-row items-center justify-center py-2 px-4">
            <div className="relative">(Not)Registered</div>
          </div>
          <div className="absolute top-[0px] left-[211px] mx-3 rounded-lg bg-blue-300 flex flex-row items-center justify-center py-2 px-4">
            <div className="relative">Guarantee</div>
          </div>
        </div>
        <div className="absolute top-[7px] left-[385px] w-[82px] h-[18px] text-[11.93px] text-black">
          <div className="absolute top-[0px] left-[22px]">Prigrevica</div>
          <Image
            className="absolute  w-[18px] h-[18px]"
            alt=""
           src={linearloction}
          />
        </div>
      </div>
      </div>

   
  )
}

export default Carform