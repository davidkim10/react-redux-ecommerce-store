import React from "react";
import "./button.styles.scss";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={className ? `${className} custom-button` : "custom-button"}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
