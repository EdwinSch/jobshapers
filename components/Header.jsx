import Navigation from "./Navigation";
import MobileButtons from "./MobileButtons";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[80px]">
      <div className="text-blue-500">LOGO</div>
      <Navigation />

      <MobileButtons />
    </header>
  );
};
export default Header;
