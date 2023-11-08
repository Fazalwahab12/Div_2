// // import Image from 'next/image'
// // import React from 'react'
 import soicalicon from '../../../public/public/social_icon.svg'

// import Quicklinks from './Quick_links'
// // import Link from 'next/link'
// // import Footorlinks from './Footor_links'
// // const Footors = () => {
// //   return (
// //     <div className="absolute left-[calc(50% - 960px)] w-full h-auto text-left text-3xl text-white font-lora">
// //       <div className="absolute top-0 left-[calc(50% - 960px)] bg-[#003087] w-[1920px] h-[771px]" />

//     //   <div className="flex flex-col md:flex-row sm:flex-col gap-4">
//     //     <Footorlinks name={'Audi A4'} />
//     //     <Footorlinks name={'Audi A4'} />
//     //     <Footorlinks name={'Audi A4'} />
//     //   </div>

//     //   <div className="flex flex-col md:flex-row sm:flex-col gap-4">
//     //     <Footorlinks name={'Audi A4'} />
//     //     <Footorlinks name={'Audi A4'} />
//     //     <Footorlinks name={'Audi A4'} />
//     //   </div>
//     // </div>
// //   );
// // };
// //     {/* <label className="cursor-pointer absolute  top-[56px] left-[1339px] font-bold text-right text-3xl">
// //         Lets connect
// //       </label>
// //       <div className="absolute top-[56px] left-[380px] w-[476px] h-[349px]">
// //         <label className="cursor-pointer text-4xl  absolute top-[0px] left-[0px] font-bold inline-block w-[472px]">
// //           The most wanted makes and models
// //         </label>

// //         {/* <div className="absolute md:mt-24 w-[476px] h-[215px] ">
// //           <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[230px] h-[61px]">
// //             <div className="absolute  rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
// //             <Link className="absolute top-[17px] left-[81px] text-lg font-bold text-white text-center" href={''}>
// //               Audi A4
// //             </Link>
// //           </button>
// //           <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[77px] left-[0px] w-[230px] h-[61px]">
// //             <div className="absolute  rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
// //             <Link className="absolute top-[17px] left-[50px] text-lg font-bold text-white text-center" href={''}>
// //               Skoda Octavia
// //             </Link>
// //           </button>
// //           <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[154px] left-[0px] w-[230px] h-[61px]">
// //             <div className="absolute  rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
// //             <Link className="absolute top-[17px] left-[65px] text-lg font-bold text-white text-center" href={''}>
// //               Fiant Punto
// //             </Link>
// //           </button>
// //           <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[246px] w-[230px] h-[61px]">
// //             <div className="absolute pt-5 rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
// //             <Link className="absolute top-[17px] left-[61px] text-lg font-bold text-white text-center" href={''}>
// //               Volkswagen
// //             </Link>
// //           </button>
// //           <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[77px] left-[246px] w-[230px] h-[61px]">
// //             <div className="absolute  rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
// //             <Link className="absolute  text-lg font-bold text-white text-center" href={''}>
// //               BMW 5 Series
// //             </Link>
// //           </button>
// //           <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[61px]">
// //             <div className="absolute  rounded-lg bg-[#658FBD] w-[230px] h-[61px]" />
// //             <Link className="absolute top-[17px] left-[61px] text-lg font-bold text-white text-center" href={''}>
// //               Renault Clio
// //             </Link>
// //           </button>
// //         </div> */}





// //     //   </div>
// //     //   <Image
// //     //     className="absolute top-[139px] left-[1276px] w-[264px] h-10"
// //     //     alt=""
// //     //     src={soicalicon}
// //     //   />
// //     //   <div>
// //     //     <Quicklinks/>
// //     //   </div>
// //     // </div> */}
 

// // export default Footors






import React from 'react'
import Footorlinks from './Footor_b'
import Quicklinks from './Customlink'
import Image from 'next/image'

const Footors = () => {
  return (
    <div className='bg-[#003087] w-auto h-screen'>
      <h1  className='md:mx-10 mx-2 md:pt-10 md:text-3xl  sm:text-sm  text-white'>
      The  wanted makes and models
      </h1>
<div className=' mx-2 md:mx-10     md:mt-24 md:w-[450px] md:h-[340px] sm:w-[200px] sm:h-[600px]'>
      <div className="flex pt-8 pb-8 flex-col md:flex-row sm:flex-col gap-4">
        <Footorlinks name={'Audi A4'} />
        <Footorlinks name={'Audi A4'} />
      
      </div>
      <div className="flex pt-8 pb-8 flex-col md:flex-row sm:flex-col gap-4">
        <Footorlinks name={'Audi A4'} />
        <Footorlinks name={'Audi A4'} />
      
      </div>
      <div className="flex pt-8 pb-8 flex-col md:flex-row sm:flex-col mb-8 gap-4">
        <Footorlinks name={'Audi A4'} />
        <Footorlinks name={'Audi A4'} />
       
      </div>
      
      </div>
      <div className=''>
      <Quicklinks/>
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