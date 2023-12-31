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
        <li>
          <Link to="/home">
            Explore
          </Link>
        </li>
        <li>
          <Link to="https://www.changearts.org/classroomsandcommunities" target="_blank">
            Partners
          </Link>
        </li>
        <li>
          <Link to="https://www.changearts.org/contactandfaq" target="_blank">
            FAQs
          </Link>
        </li>
        <li id="navbar-donate">
          <Link to="https://donorbox.org/change-arts-donation" target="_blank">
            <img src={donate} alt="donate icon" />
            <p>Donate</p>
          </Link>
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
