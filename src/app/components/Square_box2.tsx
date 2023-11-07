import React from 'react';

interface Squarebox2Props {
  name?: string;
  top: string;
  width: string;
  left: string;
  icon?: React.ReactNode;
  iconSize?: string;
  iconLeft?: string;
}

const Squarebox2: React.FC<Squarebox2Props> = ({
  name,
  top,
  left,
  width,
  icon,
  iconSize,
  iconLeft,
}) => {
  const cartboxStyles = {
    top: top,
    left: left,
    width: width,
  };

  const iconStyles = {
    position: 'absolute' as 'absolute', // Explicitly specify 'position' type
    top: '0',
    left: iconLeft || '0',
    fontSize: iconSize || '16px',
  };

  return (
    <div className="absolute rounded-lg bg-white box-border h-11 border-[1px] border-solid border-blue-500" style={cartboxStyles}>
      <div className="absolute top-[11.5px] left-[16px] font-medium">
        {name}
      </div>
      {icon && (
        <div style={iconStyles} className="absolute">
          {icon}
        </div>
      )}
    </div>
  );
}

export default Squarebox2;
