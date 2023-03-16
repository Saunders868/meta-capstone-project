import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/components/button.css'

const Button = ({ text, link , inverse, onClick }) => {
  const router = useNavigate();
  return link ? (
    <button onClick={ () =>router(`/${link}`)} className={inverse ? "lead-text inverse" : "lead-text"}>{text}</button>
  ) : (
    <button onClick={onClick} className={inverse ? "lead-text inverse" : "lead-text"}>{text}</button>
  );
};

export default Button;
