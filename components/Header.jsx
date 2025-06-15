"use client";

import Navigation from "./Navigation";
import AdminBtns from "./AdminBtns";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-16 border-b border-slate-300 relative">
      <div className="h-16 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-jsMidnight">LOGO</div>
        <Navigation />
        <AdminBtns />
        <MobileMenuButton
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};
export default Header;
