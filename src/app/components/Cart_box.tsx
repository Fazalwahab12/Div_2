import React from 'react';
import group from '../../../public/public/group.svg';
import Image from 'next/image';

interface CartboxProps {
  name?: string;
}

const Cartbox: React.FC<CartboxProps> = ({ name }) => {
  return (
    <div className="absolute top-[32px] left-[0px] rounded-lg bg-white box-border w-[123px] h-11 border-[1px] border-solid border-blue-500">
      <div className="absolute top-[11.5px] left-[8px] font-medium">
        {name}
      </div>
      <Image
        className="absolute top-[0px] left-[87px] w-9 h-11"
        alt=""
        src={group}
      />
    </div>
  );
}

export default Cartbox;
