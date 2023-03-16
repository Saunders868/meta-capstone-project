import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import { AiOutlineMenu } from 'react-icons/ai';

import '../styles/components/header.css';
import useWindowSize from "../hooks/useWindowSize";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (size.width >= 1440) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
  }, [size])

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header>
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {isMobile ? <AiOutlineMenu onClick={toggleNav} size={24} style={{zIndex: '10', cursor: 'pointer'}} /> : null}
        <Nav isMobile={isMobile} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
