import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5">
      <div className="text-blue-500">LOGO</div>
      <Navigation />
    </header>
  );
};
export default Header;
