import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="w-full border-b border-slate-300">
      <div className="h-16 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-jsMidnight">LOGO</div>
        <Navigation />
      </div>
    </header>
  );
};
export default Header;
