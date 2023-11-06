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
      <h1 className="absolute top-[16px] left-[331px] text-xl font-bold text-black inline-block w-[241px]">
        Volkswagen Polo 1.2 TDI
      </h1>
      <p className="absolute top-[58px] left-[331px] text-3xl font-bold text-red-500">
        20,300 €
      </p>
      <p className="absolute top-[63px] left-[444px] mx-6 [text-decoration:line-through]">
        20,300 €
      </p>
      <h2 className="absolute top-[22px] left-[645px] text-right">
        Date Published: 12/10/2023
      </h2>
      <p className="absolute top-[95px] left-[331px] text-black">
        + Omregistrering
      </p>
      <div className="absolute top-[274px] left-[249px] rounded  flex flex-row items-center justify-center py-1 px-4 gap-[6px] text-center text-sm text-white">
        <Image
          className="relative w-4 h-4"
          alt=""
          src={lineargallery}
        />
        <p className="relative">15</p>
      </div>
      <div className="absolute top-[131px] left-[331px] w-[413px] h-[81px] ">
        <div className="absolute  w-[62px] h-[81px]">
          <div className="absolute  w-[70px] h-[35px]">
            <h3 className="absolute ">Vehicle type</h3>
            <h2 className="absolute top-[17px] left-[0px]  font-bold text-black">
              Sedan
            </h2>
          </div>
          <div className="absolute top-[46px] left-[0px] w-9 h-[35px]">
            <p className="absolute ">HP/kW</p>
            <p className="absolute top-[17px] left-[0px]  font-bold text-black">
              55/75
            </p>
          </div>
        </div>
        <div className="absolute top-[0px] left-[102px] w-[72px] h-[81px]">
          <div className="absolute  w-[78px] h-[35px]">
            <p className="absolute ">Gearbox type</p>
            <p className="absolute top-[17px] left-[0px]  font-bold text-black">
              Auto
            </p>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[90px] h-[35px]">
            <p className="absolute ">Doors number</p>
            <p className="absolute top-[17px] left-[0px]  font-bold text-black">
              4
            </p>
          </div>
        </div>
        <div className="absolute top-[0px] left-[214px] w-[69px] h-[81px]">
          <div className="absolute  w-[70px] h-[35px]">
            <p className="absolute ">Kilometers</p>
            <p className="absolute top-[17px] left-[0px]  font-bold text-black">
              150,000 km
            </p>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[31px] h-[35px]">
            <p className="absolute ">cm3</p>
            <p className="absolute top-[17px] left-[0px]  font-bold text-black">
              2000
            </p>
          </div>
        </div>
        <div className="absolute top-[0px] left-[323px] w-[90px] h-[81px]">
          <div className="absolute  w-[100px] h-[35px]">
            <p className="absolute ">
              Manufacture year
            </p>
            <p className="absolute top-[17px] left-[0px]  font-bold text-black">
              2019
            </p>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[90px] h-[35px]">
            <p className="absolute ">Fuel type</p>
            <p className="absolute top-[17px] left-[0px]  font-bold text-black">
              Diesel
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[260px] left-[331px] w-[467px] h-[31px] text-3xs text-blue-500">
        <div className="absolute  w-[350px]  h-[31px]">
          <div className="absolute  rounded-lg bg-blue-300 flex flex-row items-center justify-center py-2 px-4">
            <p className="relative">Damaged</p>
          </div>
          <div className="absolute top-[0px] left-[91px]  rounded-lg bg-blue-300 flex flex-row items-center justify-center py-2 px-4">
            <p className="relative">(Not)Registered</p>
          </div>
          <div className="absolute top-[0px] left-[211px] mx-3 rounded-lg bg-blue-300 flex flex-row items-center justify-center py-2 px-4">
            <p className="relative">Guarantee</p>
          </div>
        </div>
        <div className="absolute top-[7px] left-[385px] w-[82px] h-[18px] text-[11.93px] text-black">
          <h1 className="absolute top-[0px] left-[22px]">Prigrevica</h1>
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