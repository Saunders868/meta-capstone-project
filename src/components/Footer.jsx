import React from "react";import logo from '../assets/Logo.svg'
import Nav from "./Nav";

const Footer = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h3>Doormat Nav</h3>
        <Nav />
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
      </div>
      <div>
        <h3>Social Links</h3>
        <ul>
          <li>Address</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
