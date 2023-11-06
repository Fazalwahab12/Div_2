import Image from 'next/image'
import React from 'react'
import redcar from '../../../public/public/redcar.png'
import lineargallery from '../../../public/public/lineargallery.svg'
import linearloction from '../../../public/public/linearlocation.svg'
const Carform = () => {
  return (
    <div >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[818px] h-[316px] border-[1px] border-solid border-stroke" />
      <Image
        className="absolute top-[8px] left-[8px] rounded-[7.57px] w-[315px] h-[300px] object-cover"
        alt=""
        src={redcar}
      />
      <div className="absolute top-[16px] left-[331px] text-xl font-semibold text-black1 inline-block w-[241px]">
        Volkswagen Polo 1.2 TDI
      </div>
      <div className="absolute top-[58px] left-[331px] text-3xl font-semibold text-red">
        20,300 €
      </div>
      <div className="absolute top-[63px] left-[444px] text-base [text-decoration:line-through]">
        20,300 €
      </div>
      <div className="absolute top-[22px] left-[645px] text-right">
        Date Published: 12/10/2023
      </div>
      <div className="absolute top-[95px] left-[331px] text-black">
        + Omregistrering
      </div>
      <div className="absolute top-[274px] left-[249px] rounded bg-crimson-200 flex flex-row items-center justify-center py-1 px-4 gap-[6px] text-center text-sm text-white">
        <Image
          className="relative w-4 h-4"
          alt=""
          src={lineargallery}
        />
        <div className="relative">15</div>
      </div>
      <div className="absolute top-[131px] left-[331px] w-[413px] h-[81px] text-3xs">
        <div className="absolute top-[0px] left-[0px] w-[62px] h-[81px]">
          <div className="absolute top-[0px] left-[0px] w-[62px] h-[35px]">
            <div className="absolute top-[0px] left-[0px]">Vehicle type</div>
            <div className="absolute top-[17px] left-[0px] text-xs font-semibold text-black1">
              Sedan
            </div>
          </div>
          <div className="absolute top-[46px] left-[0px] w-9 h-[35px]">
            <div className="absolute top-[0px] left-[0px]">HP/kW</div>
            <div className="absolute top-[17px] left-[0px] text-xs font-semibold text-black1">
              55/75
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[102px] w-[72px] h-[81px]">
          <div className="absolute top-[0px] left-[0px] w-[68px] h-[35px]">
            <div className="absolute top-[0px] left-[0px]">Gearbox type</div>
            <div className="absolute top-[17px] left-[0px] text-xs font-semibold text-black1">
              Auto
            </div>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[72px] h-[35px]">
            <div className="absolute top-[0px] left-[0px]">Doors number</div>
            <div className="absolute top-[17px] left-[0px] text-xs font-semibold text-black1">
              4
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[214px] w-[69px] h-[81px]">
          <div className="absolute top-[0px] left-[0px] w-[69px] h-[35px]">
            <div className="absolute top-[0px] left-[0px]">Kilometers</div>
            <div className="absolute top-[17px] left-[0px] text-xs font-semibold text-black1">
              150,000 km
            </div>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[31px] h-[35px]">
            <div className="absolute top-[0px] left-[0px]">cm3</div>
            <div className="absolute top-[17px] left-[0px] text-xs font-semibold text-black1">
              2000
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[323px] w-[90px] h-[81px]">
          <div className="absolute top-[0px] left-[0px] w-[90px] h-[35px]">
            <div className="absolute top-[0px] left-[0px]">
              Manufacture year
            </div>
            <div className="absolute top-[17px] left-[0px] text-xs font-semibold text-black1">
              2019
            </div>
          </div>
          <div className="absolute top-[46px] left-[0px] w-[45px] h-[35px]">
            <div className="absolute top-[0px] left-[0px]">Fuel type</div>
            <div className="absolute top-[17px] left-[0px] text-xs font-semibold text-black1">
              Diesel
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[260px] left-[331px] w-[467px] h-[31px] text-3xs text-blue">
        <div className="absolute top-[0px] left-[0px] w-[297px] h-[31px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-midnightblue flex flex-row items-center justify-center py-2 px-4">
            <div className="relative">Damaged</div>
          </div>
          <div className="absolute top-[0px] left-[91px] rounded-lg bg-midnightblue flex flex-row items-center justify-center py-2 px-4">
            <div className="relative">(Not)Registered</div>
          </div>
          <div className="absolute top-[0px] left-[211px] rounded-lg bg-midnightblue flex flex-row items-center justify-center py-2 px-4">
            <div className="relative">Guarantee</div>
          </div>
        </div>
        <div className="absolute top-[7px] left-[385px] w-[82px] h-[18px] text-[11.93px] text-black">
          <div className="absolute top-[0px] left-[22px]">Prigrevica</div>
          <Image
            className="absolute top-[0px] left-[0px] w-[18px] h-[18px]"
            alt=""
           src={linearloction}
          />
        </div>
      </div>
      </div>

   
  )
}

export default Carform