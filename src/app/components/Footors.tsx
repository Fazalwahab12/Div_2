


import React from 'react'
import Footorlinks from './Footor_b'
import soicalicon from '../../../public/public/social_icon.svg'
import Image from 'next/image'
import Customlink from './Customlink'

const Footors = () => {
  return (
    <div className='bg-[#003087] w-auto h-screen'>
      <h1  className='md:mx-10 mx-2 md:pt-10 md:text-3xl  sm:text-sm  text-white'>
      The  wanted makes and models
      </h1>
<div className=' mx-2 md:mx-10     md:mt-24 md:w-[450px] md:h-[340px] sm:w-[100px] sm:h-[600px]'>
      <div className="flex pt-8 pb-8 flex-col md:flex-row sm:flex-col gap-2 ">
        <Footorlinks name={'Audi A4'} />
        <Footorlinks name={'Audi A4'} />
      
      </div>
      <div className="flex pt-8 pb-8 flex-col md:flex-row sm:flex-col gap-4">
        <Footorlinks name={'Audi A4'} />
        <Footorlinks name={'Audi A4'} />
      
      </div>
      <div className="flex pt-8 pb-8 flex-col md:flex-row sm:flex-col mb-8 gap-2">
        <Footorlinks name={'Audi A4'} />
        <Footorlinks name={'Audi A4'} />
       
      </div>
      
      </div>
      <div className=' '>
      <Customlink/>
      </div    >
      <label className="cursor-pointer absolute sm:top-[8540px] sm:left-[20px]  md:top-[2950px] md:left-[900px] font-bold text-right text-3xl">
         Lets connect
       </label>
       <div>
       <Image src={soicalicon} alt='' className="absolute sm:top-[8590px] sm:left-[20px] md:top-[3030px] md:left-[880px] w-[264px] h-10">
      
       </Image>
       </div>
      </div>
    
  )
}

export default Footors