import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="lg:row-span-3 bg-red-500 sticky top-0 border-solid border-black border-y-2">
      <div className="flex flex-row h-20">
        <div className="w-full h-full inline-flex justify-center items-center">
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
