import { FaBars } from "react-icons/fa6";

const MobileButtons = () => {
  return (
    <div className="md:hidden">
      <button className="cursor-pointer bg-[#fdfcfa] p-2 rounded-lg border border-[#989490]">
        <FaBars />
      </button>
    </div>
  );
};
export default MobileButtons;
