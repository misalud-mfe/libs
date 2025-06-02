import React from "react";
import "common-resources/css/buttons.css";

const Button = ({ children, className = "", ...props }) => (
  <button className={`btn ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
