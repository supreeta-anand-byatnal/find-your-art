import React from "react";
import "./SignupForm.css";
import google from "../../assets/google-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import apple from "../../assets/apple-icon.svg";

export default function SignupForm() {
  return (
    <div id="signup-form">
      <h1 id="signup-title">Create your account.</h1>
      <form>
        <label for="signup-email">Email</label>
        <input id="signup-email" type="email" placeholder="hello@email.com" />
        <label for="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <label for="signup-confirm-password">Confirm Password</label>
        <input
          id="signup-confirm-password"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <button id="signup-button">Sign up</button>
        <p id="signup-separator">
          <span>OR</span>
        </p>
        <button id="signup-gmail">
          <img src={google} alt="google icon" />
          Sign up with Google
        </button>
        <button id="signup-facebook">
          <img src={facebook} alt="facebook icon" />
          Sign up with Facebook
        </button>
        <button id="signup-apple">
          <img src={apple} alt="apple icon" />
          Sign up with Apple
        </button>
      </form>
    </div>
  );
}
