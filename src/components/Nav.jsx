import React from "react";

const links = [
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

const Nav = () => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.title}>{link.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
