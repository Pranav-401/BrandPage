import React from "react";
import logo from "../../public/image/brand_logo.png";
import "../index.css";
const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li herf="#">Menu</li>
            <li herf="#">Location</li>
            <li herf="#">About</li>
            <li herf="#">Contact </li>
          </ul>
          <button>login</button>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
