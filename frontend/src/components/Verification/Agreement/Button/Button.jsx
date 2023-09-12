import React from 'react';
import './Button.css';

const Button = ({ className, hierarchy, state, text, disabled }) => {
  const buttonClasses = `button ${className} ${hierarchy} ${state} ${disabled ? 'disabled' : ''}`;

  return (
    <button className={buttonClasses} disabled={disabled}>
      <div className="div">{text}</div>
    </button>
  );
};

export default Button;