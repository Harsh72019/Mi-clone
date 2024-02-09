import React from "react";
import "../styles/Navbar.css";

const seacrhIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill="rgb(61, 61, 61)" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

const logo = "https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img src={logo} id="logoImage" alt="hot" />
        </a>
        </div>
        <a className="navlinks" href="/miphones">Mi Phones</a>
        <a className="navlinks" href="/redmiphones">Redmi Phones</a>
        <a className="navlinks" href="/tv">TV</a>
        <a className="navlinks" href="/laptops">Laptops</a>
        <a className="navlinks" href="/lifestyle">Fitness & Lifestyle</a>
        <a className="navlinks" href="/home">Home</a>
        <a className="navlinks" href="/audio">Audio</a>
        <a className="navlinks" href="/accessories">Accessories</a>
        <div className="searchBox">
          <input type="text" name="search" placeholder="Search Products" />
          {seacrhIcon}
        </div>
      
    </div>
  );
};

export default Navbar;
