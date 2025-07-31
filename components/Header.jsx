"use client";

import ContactLint from "@/components/ContactLint";
import Navigation from "./Navigation";
import AdminBtns from "./AdminBtns";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import logo from "@/assets/js-logo.png";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-300 sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <ContactLint />
      <div className="h-16 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={150} height={0} priority />
        </Link>
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
