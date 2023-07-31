import React from 'react';
import './Account.css';
import logo from '../../assets/fya-logo.svg'

export default function Account({ children }) {
  return (
    <div id="account">
      <div id="account-side-image" />
      <div id="account-side-form">
        <div id="account-form-container"> 
          <img src={logo} alt="fya logo" />
          <div id="account-form-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
