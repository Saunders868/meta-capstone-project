import React from "react";
import "../styles/components/nav.css";

export const links = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "About",
    link: "",
  },
  {
    title: "Menu",
    link: "",
  },
  {
    title: "Reservations",
    link: "",
  },
  {
    title: "Order Online",
    link: "",
  },
  {
    title: "Login",
    link: "",
  },
];

const Nav = ({ isOpen, isMobile }) => {
  return isMobile ? (
    <nav className={isOpen ? "active" : ""}>
      <ul>
        {links.map((link) => (
          <li className="section-title" key={link.title}>
            <a href="#">{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <nav className="desktop">
      <ul>
        {links.map((link) => (
          <li className="section-title" key={link.title}>
            <a href="#">{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
