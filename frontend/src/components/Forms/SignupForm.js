import React from 'react';
import google from '../../assets/google-icon.svg';
import facebook from '../../assets/facebook-icon.svg';
import apple from '../../assets/apple-icon.svg';
import { Link } from 'react-router-dom';

export default function SignupForm() {
  return (
    <div className="form">
      <h1>Create your account.</h1>
      <form>
        <label for="signup-email">Email</label>
        <input
          id="signup-email"
          className="form-email"
          type="email"
          placeholder="hello@email.com"
        />
        <label for="signup-password">Password</label>
        <input
          id="signup-password"
          className="form-password"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <label for="signup-confirm-password">Confirm Password</label>
        <input
          id="signup-confirm-password"
          type="password"
          className="form-password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <Link to="/signup/role">
          <button className="form-submit">Sign up</button>
        </Link>
        <p className="form-separator">
          <span>OR</span>
        </p>
        <button className="gmail">
          <img src={google} alt="google icon" />
          Sign up with Google
        </button>
        <button className="facebook">
          <img src={facebook} alt="facebook icon" />
          Sign up with Facebook
        </button>
        <button className="apple">
          <img src={apple} alt="apple icon" />
          Sign up with Apple
        </button>
      </form>
    </div>
  );
}
