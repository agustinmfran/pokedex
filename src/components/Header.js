import { Link } from "react-scroll/modules";

function Header() {
  return (
    <header className="bg-red-500 sticky top-0 border-solid border-black border-y-2">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-rows-1 lg:h-24 md:h-24 sm:h-full">
        <div className="flex justify-center">
          <Link
            to="home"
            className="hover:underline cursor-pointer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img
              className="h-24 m-4 md:m-0 lg:m-0 md:h-full lg:h-full w-68"
              src={"/logo.png"}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
