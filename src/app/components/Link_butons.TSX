// components/Button.tsx
import React from 'react';

interface ButtonProps {
  name: string;
}

const linkbutons: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="rounded-lg bg-[#658FBD] w-[230px] h-[61px]">
      {name}
    </button>
  );
};

export default linkbutons;
