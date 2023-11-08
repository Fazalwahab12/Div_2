import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mobile from '../../../public/public/mobile.svg'
import layer from '../../../public/public/layer.svg'
import lineararrowdown from '../../../public/public/lineararrowdown.svg'

const Quicklinks = () => {
  return (
    <div>
         <div className="absolute md:top-[2900px] sm:top-[7920px] md:left-[600px] sm:left-[230px] w-64 h-[533px] text-base text-[inherit]">
        <label className="cursor-pointer absolute top-[65px] left-[0px] leading-[36px]">
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/utvrdjivanje-trzisne-vrednosti-vozila"
              target="_blank"
            >
              Vehicle assessment
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/sigurna-kupovina-polovnih-automobila-bez-prevare/"
              target="_blank"
            >
              Safe, scam-free used 
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/oglasi-na-mail"
              target="_blank"
            >
              Email ads
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/knjiga-utisaka"
              target="_blank"
            >
              Book of impressions
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/prednosti-oglasavanja-na-polovniautomobili"
              target="_blank"
            >
              Advantages 
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://polovniautomobilihelp.zendesk.com/hc/sr-me"
              target="_blank"
            >
             QNA
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/docs/MediaKit2023Polovniautomobili.pdf"
              target="_blank"
            >
              Digital advertising
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/o-nama"
              target="_blank"
            >
              About us
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/uslovi-koriscenja"
              target="_blank"
            >
              Terms of use
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/obavestenje-o-privatnosti"
              target="_blank"
            >
              Privacy notice
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/pruzate-auto-usluge"
              target="_blank"
            >
           provide car services
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/mobilne-aplikacije"
              target="_blank"
            >
              Mobile applications
            </Link>
          </p>
          <p className="m-0">
            <Link
              className="text-[inherit]"
              href="https://www.polovniautomobili.com/prijatelji-sajta"
              target="_blank"
            >
              Friends of the site
            </Link>
          </p>
        </label>
        <label className="cursor-pointer absolute top-[0px] left-[0px] text-13xl font-semibold text-white">
          Quick Links
        </label>
        
      </div>
      <Image
        className="absolute sm:top-[8650px]   md:top-[3100px] md:left-[875px]  w-[276px] h-[37px]"
        alt=""
        src={mobile}
      />
      <div className="absolute sm:top-[8490px] sm:left-[30px] md:top-[3400px] md:left-[60px] w-[279px] h-10">
        <div className="cursor-pointer py-2 px-5 bg-white absolute top-[0px] left-[0px] rounded-37xl flex flex-row items-center justify-center gap-[16px] border-[1px]  border-[#003087]">
          <div className="relative w-[84px] h-6">
            <Image
              className="absolute top-[2px] left-[0px] w-5 h-5 overflow-hidden"
              alt=""
              src={layer}
            />
            <div className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[28px] text-[#003087] text-left inline-block">
              English
            </div>
          </div>
          <Image
            className="relative w-4 h-4"
            alt=""
            src={lineararrowdown}
          />
        </div>
        <div className="cursor-pointer py-1.5 pr-4 pl-2 bg-white absolute top-[0px] left-[190px] rounded-3xl box-border w-[89px] h-10 flex flex-row items-center justify-center gap-[4px] border-[1px] border-solid border-[#003087]">
          <div className="relative rounded-[50%] bg-blue w-[22px] h-[22px]" />
          <div className="relative w-[29px] h-[18px]">
            <div className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px]  text-[#003087] text-left inline-block">
              Light
            </div>
          </div>
        </div>
      </div>
      
      <label className="cursor-pointer absolute sm:top-[8710px] sm:left-8 md:top-[3450px] md:left-[calc(50%_-_177px)] text-base leading-[36px]">
        Copyright 2023 Endrobil.no. All rights reserved.
      </label>
    </div>
  )
}

export default Quicklinks


// import Link from 'next/link';

// interface CustomLinkProps {
//   href: string;
//   name: string;
// }

// const Customlink: React.FC<CustomLinkProps> = ({ href, name }) => {
//   return (
//     <Link href={href}>
//       <p className="text-blue-500 hover:underline">{name}</p>
//     </Link>
//   );
// };

// export default Customlink;
