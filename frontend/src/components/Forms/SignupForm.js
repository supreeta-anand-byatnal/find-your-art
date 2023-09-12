import React, { useState } from 'react';
import google from '../../assets/google-icon.svg';
import facebook from '../../assets/facebook-icon.svg';
import apple from '../../assets/apple-icon.svg';
import { Link } from 'react-router-dom';
import SingleField from './SingleField/SingleField';

export default function SignupForm({signUpData, handleSignUpInput, handleSignUpRequest}) {
  return (
    <div className="form">
      <h1>Create your account.</h1>
      <form>
        <SingleField
          inputTitle="Email"
          inputID="signUpEmail"
          inputClass="form-email icon-input"
          inputType="email"
          inputPH="hello@email.com"
          inputValue={signUpData.signUpEmail}
          handleInputChange={handleSignUpInput}
        />
        <SingleField
          inputTitle="Password"
          inputID="signUpPassword"
          inputClass="form-password icon-input"
          inputType="password"
          inputPH="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          inputValue={signUpData.signUpPassword}
          handleInputChange={handleSignUpInput}
        />
        <SingleField
          inputTitle="Confirm Password"
          inputID="signUpConfirm"
          inputClass="form-password icon-input"
          inputType="password"
          inputPH="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          inputValue={signUpData.signUpConfirm}
          handleInputChange={handleSignUpInput}
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
