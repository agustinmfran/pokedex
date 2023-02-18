function Header() {
  return (
    <header className="bg-red-500 sticky top-0 border-solid border-black border-y-2">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-rows-1 lg:h-24 md:h-24 sm:h-full">
        <div className="flex justify-center items-center">
          <img src="/gotta.png" alt="gotta" className="w-52 h-10 pl-8" />
        </div>
        <div className="flex justify-center">
          <img
            className="h-24 m-4 md:m-0 lg:m-0 md:h-full lg:h-full w-68"
            src={"/logo.png"}
            alt="logo"
          />
        </div>
        <div className="flex justify-center items-center pb-4 lg:pb-0 md:pb-0">
          <a href="/">
            <button className="flex w-16 h-8 justify-center items-center rounded-md border-2 border-black bg-red-100 px-4 py-2 text-sm font-bold text-gray-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Home
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
