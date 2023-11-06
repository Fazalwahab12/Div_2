import React from 'react'
import Carcard from './Car_card'

import Carform from './Car_form'

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
<div className="absolute top-[1539px] left-[714px] w-[818px] h-[316px] text-left text-[11.93px] text-body-text font-poppins">
      <Carform/>
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