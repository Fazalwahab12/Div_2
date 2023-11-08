
interface ButtonProps {
  name: string;
}

const Footorb: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className=" rounded-lg bg-[#658FBD] md:w-[190px] sm:w-[140px] h-[52px]">
      <h1 className=" text-teal-50 font-bold ">{name}</h1>
    </button>
  );
};

export default Footorb;