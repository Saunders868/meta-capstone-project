import React from "react";
import logo from "../assets/Logo.svg";
import { links } from "./Nav";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="item" >
          <h3 className="lead-text">Doormat Nav</h3>
          <ul>
            {links.map((link) => (
              <li className="content" key={link.title}>
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="item">
          <h3 className="lead-text">Contact</h3>
          <ul>
            <li className="content">Address</li>
            <li className="content">Email</li>
            <li className="content">Phone</li>
          </ul>
        </div>
        <div className="item">
          <h3 className="lead-text">Social Links</h3>
          <ul>
            <li className="content">Address</li>
            <li className="content">Email</li>
            <li className="content">Phone</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
