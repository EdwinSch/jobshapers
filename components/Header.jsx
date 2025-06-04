import Navigation from "./Navigation";
import Dashboard from "./Dashboard";

const Header = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
      <div className="text-white">LOGO</div>
      <Navigation />
      <Dashboard />
    </div>
  );
};
export default Header;
