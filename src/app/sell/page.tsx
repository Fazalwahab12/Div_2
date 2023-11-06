import Image from 'next/image'
import React from 'react'
import car_main from '../../../public/public/car_main.png'


import Squarebox2 from '../components/Square_box2'
import Cartbox from '../components/Cart_box'
const page = () => {
  return (
    <div>
        <div>
            <Image src={car_main} alt={''}></Image>
            <div className='  absolute top-[330px] left-[90] w-4/5      h-[600px]  bg-white  shadow-lg  mx-44'>
            
            <div className="  absolute top-[100px] left-[10px] rounded-lg bg-white w-[255px] h-11 border-[1px] border-solid border-blue-500"> 
            <div className=" flex justify-center space-x-[130px]">
        <Squarebox2  name="Mark" />
        </div>
        </div>

         
        <div className=" flex absolute top-[100px] left-[280px] rounded-lg bg-white w-[255px] h-11 border-[1px] border-solid border-blue-500"> 
            <div className=" flex justify-center space-x-[130px]">
        <Squarebox2  name="Mark" />
        </div>
        </div>

          
        <div className=" flex absolute top-[100px] left-[550px] rounded-lg bg-white w-[255px] h-11 border-[1px] border-solid border-blue-500"> 
            <div className=" flex justify-center space-x-[130px]">
        <Squarebox2  name="Mark" />
        </div>
        </div>
        
        <div className="absolute top-[95px] left-[820px] rounded-lg bg-blue-500 w-[252px] h-[52px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white">
        <img
          className="relative w-4 h-4"
          alt=""
          src="/vuesaxlinearsearchnormal1.svg"
        />
        <p className="relative font-medium">5.221.456 results</p>
      </div>

      <div className="absolute top-[95px] left-[1080px] rounded-lg bg-red-500 w-[252px] h-[52px] flex flex-row items-center justify-center py-4 px-[41px] gap-[8px] text-white">
        <img
          className="relative w-4 h-4"
          alt=""
          src="/vuesaxlinearsearchnormal1.svg"
        />
        <p className="relative font-medium">5.221.456 results</p>
      </div>

      <div className="absolute top-[130px] left-[10px] w-[254px] h-[157px] text-left text-sm text-blue-500 font-poppins">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        
       </div>
      </div>

      <div className="absolute top-[130px] left-[200px] w-[254px] h-[157px] text-left text-sm text-blue-500 font-poppins">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        
       </div>
      </div>

      <div className="absolute top-[130px] left-[350px] w-[254px] h-[157px] text-left text-sm text-blue-500 font-poppins">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        
       </div>
      </div>

      <div className="absolute top-[130px] left-[530px] w-[254px] h-[157px] text-left text-sm text-blue-500 font-poppins">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        
       </div>
      </div>

      <div className="absolute top-[130px] left-[670px] w-[254px] h-[157px] text-left text-sm text-blue-500 font-poppins">
      <div className="flex justify-center space-x-[130px]">
        <Cartbox name="Mark" />
        
       </div>
      </div>

      <div className="  absolute top-[162px] left-[800px] rounded-lg bg-white w-[255px] h-11 border-[1px] border-solid border-blue-500"> 
            <div className=" flex justify-center space-x-[130px]">
        <Squarebox2  name="Mark" />
        </div>
        </div>
      
        <div className="  absolute top-[162px] left-[1070px] rounded-lg bg-white w-[255px] h-11 border-[1px] border-solid border-blue-500"> 
            <div className=" flex justify-center space-x-[130px]">
        <Squarebox2  name="Mark" />
        </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default page