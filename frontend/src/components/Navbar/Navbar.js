import React from 'react'
import logo from '../../assets/fya-logo.svg'
import donate from '../../assets/donate.svg'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id="navbar-container">
      <img src={logo} alt="fya logo" />
      <ul>
        <li>Explore</li>
        <li>Partners</li>
        <li>FAQs</li>
        <li id="navbar-donate">
          <img src={donate} alt="donate icon" /> Donate
        </li>
      </ul>
      <div id="navbar-button-container">
        <Link to="/login">
          <button id="navbar-login-button">Log in</button>
        </Link>
        <Link to="/signup">
          <button id="navbar-signup-button">Sign up</button>
        </Link>
      </div>
    </nav>
  );
}
