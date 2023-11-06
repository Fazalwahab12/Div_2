import Image from 'next/image';
import React from 'react';
import group from '../../../public/public/group.svg';

interface SquareboxProps {
  name?: string;
}

const Squarebox2: React.FC<SquareboxProps> = ({ name }) => {
  return (
    <div>
      <h1 className="absolute top-[11.5px] left-[16px] font-medium">
        {name}
      </h1>
      <Image
        className="absolute top-[0px] left-[218px] w-9 h-11"
        alt=""
        src={group}
      />
    </div>
  );
};

export default Squarebox2;
