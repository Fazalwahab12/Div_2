
interface ButtonProps {
  name: string;
}

const Footorb: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className=" rounded-lg bg-[#658FBD] w-[190px] h-[52px]">
      <h1 className=" text-teal-50 font-bold ">{name}</h1>
    </button>
  );
};

export default Footorb;