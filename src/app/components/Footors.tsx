import Image from 'next/image'
import React from 'react'
import soicalicon from '../../../public/public/social_icon.svg'

import Quicklinks from './Quick_links'
const Footors = () => {
  return (
    <div className="absolute top-[2854px] left-[calc(50%_-_960px)] w-[1820px] h-[771px] text-left text-13xl text-white font-lora">
    <div className="absolute top-[0px] left-[calc(50%_-_960px)] bg-[#003087] w-[1920px] h-[771px]" />
    <label className="cursor-pointer absolute  top-[56px] left-[1339px] font-bold text-right text-3xl">
        Lets connect
      </label>
      <div className="absolute top-[56px] left-[380px] w-[476px] h-[349px]">
        <label className="cursor-pointer text-4xl  absolute top-[0px] left-[0px] font-bold inline-block w-[472px]">
          The most wanted makes and models
        </label>
        <div className="absolute top-[134px] left-[0px] w-[476px] h-[215px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[230px] h-[61px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
            <div className="absolute top-[17px] left-[81px] text-lg font-bold text-white text-center">
              Audi A4
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[77px] left-[0px] w-[230px] h-[61px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
            <div className="absolute top-[17px] left-[50px] text-lg font-bold text-white text-center">
              Skoda Octavia
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[154px] left-[0px] w-[230px] h-[61px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
            <div className="absolute top-[17px] left-[65px] text-lg font-bold text-white text-center">
              Fiant Punto
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[246px] w-[230px] h-[61px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
            <div className="absolute top-[17px] left-[61px] text-lg font-bold text-white text-center">
              Volkswagen
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[77px] left-[246px] w-[230px] h-[61px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
            <div className="absolute top-[17px] left-[56px] text-lg font-bold text-white text-center">
              BMW 5 Series
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[154px] left-[246px] w-[230px] h-[61px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
            <div className="absolute top-[17px] left-[61px] text-lg font-bold text-white text-center">
              Renault Clio
            </div>
          </button>
        </div>
      </div>
      <Image
        className="absolute top-[139px] left-[1276px] w-[264px] h-10"
        alt=""
        src={soicalicon}
      />
      <div>
        <Quicklinks/>
      </div>
    </div>
  )
}

export default Footors