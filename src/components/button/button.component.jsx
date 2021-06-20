import React from 'react';
import './button.styles.scss';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`custom-button ${className ? className : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
