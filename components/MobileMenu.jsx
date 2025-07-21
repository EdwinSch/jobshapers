import LinkButton from "./LinkButton";
import {
  FaHouse,
  FaSuitcase,
  FaUsers,
  FaBuilding,
  FaPhone,
} from "react-icons/fa6";
import { useAuth } from "@/context/authContext";
import ActionButton from "./ActionButton";
import destroySession from "@/app/actions/destroySession";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
      toast.success("uitgelogd");
    } else {
      toast.error(error);
    }
  };

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

      <ul className="flex flex-col gap-4">
        {!isAuthenticated && (
          <li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <LinkButton
              variant="primary"
              href="/login"
              label="sign-in"
              className="w-24 text-center"
            />
          </li>
        )}

        {isAuthenticated && (
          <li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <ActionButton
              label="sign out"
              variant="primary"
              onClick={handleLogout}
              className="w-32"
            />
          </li>
        )}

        {isAuthenticated && (
          <li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <LinkButton
              variant="secondary"
              href="/createjob"
              label="add job"
              className="w-32 text-center"
            />
          </li>
        )}

        {isAuthenticated && (
          <li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <LinkButton
              variant="tertiary"
              href="/vacatures/manage"
              label="manage jobs"
              className="w-32 text-center"
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
