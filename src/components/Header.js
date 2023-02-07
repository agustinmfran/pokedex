import NavBar from "./NavBar";
import "./Header.css";

function Header() {
  return (
    <header className="container">
      <div className="searchbar-container">
        <div className="icon-container">
          <img src={"/pokeball.svg"} alt="pokeball" className="icon" />
        </div>
        <div className="searchbar-container-box">
          <input type="search" placeholder=" . . ." className="searchbar" />
        </div>
      </div>
      <div className="logo-container">
        <img src={"/logo.png"} alt="Logo" id="logo" />
      </div>
      <div className="navbar-container">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
