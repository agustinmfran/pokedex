function Searchbar() {
  return (
    <div className="inline-flex">
      <img
        src={"/pokeball.svg"}
        alt="pokeball"
        className="inline object-cover h-8 w-8"
      />
      <input
        className="inline h-8 w-40 bg-red-100 border-solid border-2 border-black rounded-md pl-1 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        type="search"
        placeholder=" . . ."
      />
    </div>
  );
}

export default Searchbar;
