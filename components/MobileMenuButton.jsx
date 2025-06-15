"use client";

import { FaBars, FaXmark } from "react-icons/fa6";

const MobileMenuButton = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <button
      type="button"
      className="block md:hidden cursor-pointer text-jsMidnight hover:text-jsBlue"
      onClick={() => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }}
    >
      {isMobileMenuOpen ? <FaXmark size="18px" /> : <FaBars size="18px" />}
    </button>
  );
};

export default MobileMenuButton;
