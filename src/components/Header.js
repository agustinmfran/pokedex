import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="lg:row-span-3 bg-red-500 sticky top-0 border-solid border-black border-y-2">
      <div className="flex flex-row h-24">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src="/gotta.png" alt="gotta" className="w-52 h-10 pb-1 pl-8" />
          <Searchbar />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Logo />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Dropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
