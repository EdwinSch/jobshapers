import LinkButton from "./LinkButton";
import {
  FaHouse,
  FaSuitcase,
  FaUsers,
  FaBuilding,
  FaPhone,
} from "react-icons/fa6";

const MobileMenu = ({ isMobileMenuOpen }) => {
  return (
    <div
      className={`${
        isMobileMenuOpen ? "w-full p-8" : "w-0 p-0"
      } h-screen bg-jsOffWhite absolute top-16 right-0 overflow-hidden duration-300`}
    >
      <nav>
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-3">
            <FaHouse size={20} className="text-jsText" />
            <LinkButton href="/" label="home" variant="ghost" />
          </li>
          <li className="flex items-center gap-3">
            <FaSuitcase size={20} className="text-jsText" />
            <LinkButton href="/vacatures" label="vacatures" variant="ghost" />
          </li>
          <li className="flex items-center gap-3">
            <FaUsers size={20} className="text-jsText" />
            <LinkButton href="/werknemers" label="werknemers" variant="ghost" />
          </li>
          <li className="flex items-center gap-3">
            <FaBuilding size={20} className="text-jsText" />
            <LinkButton href="/werkgevers" label="werkgevers" variant="ghost" />
          </li>
          <li className="flex items-center gap-3">
            <FaPhone size={20} className="text-jsText" />
            <LinkButton href="/contact" label="contact" variant="ghost" />
          </li>
        </ul>
      </nav>

      <hr className="my-6 border border-jsText" />
      <LinkButton variant="secondary" label="sign-in" />
    </div>
  );
};

export default MobileMenu;
