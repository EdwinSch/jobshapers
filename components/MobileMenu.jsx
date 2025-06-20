import LinkButton from "./LinkButton";
import {
  FaHouse,
  FaSuitcase,
  FaUsers,
  FaBuilding,
  FaPhone,
} from "react-icons/fa6";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div
      className={`${
        isMobileMenuOpen ? "w-full p-8" : "w-0 p-0"
      } h-screen bg-jsOffWhite absolute top-24 right-0 overflow-hidden duration-300`}
    >
      <nav>
        <ul className="flex flex-col gap-6">
          <li
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaHouse size={20} className="text-jsText" />
            <LinkButton href="/" label="home" variant="ghost" />
          </li>
          <li
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaSuitcase size={20} className="text-jsText" />
            <LinkButton href="/vacatures" label="vacatures" variant="ghost" />
          </li>
          <li
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaUsers size={20} className="text-jsText" />
            <LinkButton href="/werknemers" label="werknemers" variant="ghost" />
          </li>
          <li
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBuilding size={20} className="text-jsText" />
            <LinkButton href="/werkgevers" label="werkgevers" variant="ghost" />
          </li>
          <li
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaPhone size={20} className="text-jsText" />
            <LinkButton href="/contact" label="contact" variant="ghost" />
          </li>
        </ul>
      </nav>

      <hr className="my-6 border border-jsText" />

      <div className="flex gap-4">
        <LinkButton
          variant="primary"
          label="sign-in"
          className="w-24 text-center"
        />
        <LinkButton
          variant="secondary"
          label="add job"
          className="w-24 text-center"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
