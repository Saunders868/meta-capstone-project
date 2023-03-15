import React from "react";
import logo from '../assets/Logo.svg'
import Nav from "./Nav";



const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
