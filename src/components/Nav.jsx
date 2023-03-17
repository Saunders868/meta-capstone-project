import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/nav.css";

export const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Menu",
    link: "/#highlights",
  },
  {
    title: "Reservations",
    link: "/reservation",
  },
  {
    title: "Order Online",
    link: "/",
  },
  {
    title: "Login",
    link: "/",
  },
];

const Nav = ({ isOpen, isMobile, setIsOpen }) => {
  const closeNav = () => {
    setIsOpen(false);
  };
  return isMobile ? (
    <nav className={isOpen ? "active" : ""}>
      <ul>
        {links.map((link) => (
          <li className="section-title" key={link.title}>
            <Link onClick={closeNav} to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <nav className="desktop">
      <ul>
        {links.map((link) => (
          <li className="section-title" key={link.title}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
