import React from 'react'
interface SquareboxProps {
  name: string;
 
}
const Squarebox : React.FC<SquareboxProps> = ({ name  }) => {
  return (
    <div>
    <div className="absolute top-[1px] left-[0px] rounded-8xs bg-white w-[18px] h-[18px] border-[1px] border-solid border-blue-500" />
    <div className="absolute top-[0px] left-[28px]">{name}</div>
    </div>
  )
}

export default Squarebox