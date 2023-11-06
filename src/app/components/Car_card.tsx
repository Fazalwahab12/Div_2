import Image from 'next/image'
import React from 'react'
import car from '../../../public/public/white_car.png'
const Carcard = () => {
  return (
<div>
      <div className="absolute top-[2.8px] left-[0px] rounded-[7.57px] bg-white shadow-[0px_0px_10.4px_rgba(0,_0,_0,_0.4)] box-border w-[260.1px] h-[326.3px] border-[0.9px] border-solid border-stroke" />
      <Image
        className="absolute top-[0px] left-[0px] rounded-[7.57px] w-[260.1px] h-[209px] object-cover"
        alt=""
        src={car}
      />
      <div className="absolute top-[223.7px] left-[15.1px] text-[15.13px] font-semibold text-black inline-block w-[227.9px]">{`Ford Mondeo ST `}</div>
      <div className="absolute top-[247.7px] left-[15.1px] text-red-500 font-semibold inline-block w-[91.7px] h-[26.2px]">
        20,300 €
      </div>
      <div className="absolute top-[285.3px] left-[17px] w-[227px] h-[31px] text-center text-[9.46px] text-body-text">
        <div className="absolute top-[0px] left-[0px] w-[29.3px] h-[29.4px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[29.3px] h-[11.9px]">
            Year
          </div>
          <div className="absolute top-[15.1px] left-[1.9px] text-[11.35px] font-semibold text-black1 inline-block w-[25.5px] h-[14.3px]">
            2019
          </div>
        </div>
        <div className="absolute top-[0px] left-[70.9px] w-[62.4px] h-[29.6px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[62.4px] h-[11.9px]">
            Kilometers
          </div>
          <div className="absolute top-[15.4px] left-[8.5px] text-[11.35px] font-semibold text-black1 inline-block w-[44.4px] h-[14.2px]">
            185.000
          </div>
        </div>
        <div className="absolute top-[0.2px] left-[174px] w-[53px] h-[29.2px]">
          <div className="absolute top-[0px] left-[0px] inline-block w-[53px] h-[11.3px]">
            Engine
          </div>
          <div className="absolute top-[14.9px] left-[0.9px] text-[11.35px] font-semibold text-black1 inline-block w-[51.1px] h-[14.3px]">
            Petrol
          </div>
        </div>
        <div className="absolute top-[3.5px] left-[49.6px] box-border w-[0.9px] h-7 border-r-[0.9px] border-solid border-stroke" />
        <div className="absolute top-[3.5px] left-[153.7px] box-border w-[0.9px] h-7 border-r-[0.9px] border-solid border-stroke" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[260.1px] h-[316.3px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-[7.57px] w-[260.1px] h-[209px] object-cover"
          alt=""
          src="/1-2345681@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0.1px] rounded-[7.57px] w-[260.1px] h-[209px] object-cover"
          alt=""
          src="/img-8284-21@2x.png"
        />
        <div className="absolute top-[247.7px] left-[15.1px] font-semibold inline-block w-[91.7px] h-[26.2px]">
          20,300 €
        </div>
        <div className="absolute top-[285.3px] left-[17px] w-[227px] h-[31px] text-center text-[9.46px] text-body-text">
          <div className="absolute top-[0px] left-[0px] w-[29.3px] h-[29.4px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[29.3px] h-[11.9px]">
              Year
            </div>
            <div className="absolute top-[15.1px] left-[1.9px] text-[11.35px] font-semibold text-black1 inline-block w-[25.5px] h-[14.3px]">
              2019
            </div>
          </div>
          <div className="absolute top-[0px] left-[70.9px] w-[62.4px] h-[29.6px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[62.4px] h-[11.9px]">
              Kilometers
            </div>
            <div className="absolute top-[15.4px] left-[8.5px] text-[11.35px] font-semibold text-black1 inline-block w-[44.4px] h-[14.2px]">
              185.000
            </div>
          </div>
          <div className="absolute top-[0.2px] left-[174px] w-[53px] h-[29.2px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[53px] h-[11.3px]">
              Engine
            </div>
            <div className="absolute top-[14.9px] left-[0.9px] text-[11.35px] font-semibold text-black1 inline-block w-[51.1px] h-[14.3px]">
              Petrol
            </div>
          </div>
          <div className="absolute top-[3.5px] left-[49.6px] box-border w-[0.9px] h-7 border-r-[0.9px] border-solid border-stroke" />
          <div className="absolute top-[3.5px] left-[153.7px] box-border w-[0.9px] h-7 border-r-[0.9px] border-solid border-stroke" />
        </div>
      </div>
    </div>
    
  )
}

export default Carcard