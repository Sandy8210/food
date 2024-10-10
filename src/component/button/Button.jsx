import React from "react";
import "./Button.css";

const Button = ({ type, onClick, label, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
