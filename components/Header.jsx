import Navigation from "./Navigation";
import AdminBtns from "./AdminBtns";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full border-b border-slate-300">
      <div className="h-16 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-jsMidnight">LOGO</div>
        <Navigation />
        <AdminBtns />

        {/* Mobile menu btn */}
        <button
          type="button"
          className="block md:hidden cursor-pointer text-jsMidnight hover:text-jsBlue"
        >
          <FaBars size="18px" />
        </button>
      </div>
    </header>
  );
};
export default Header;
