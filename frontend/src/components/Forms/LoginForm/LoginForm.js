import './LoginForm.css';
import '../Forms.css';
import google from '../../../assets/google-icon.svg';
import facebook from '../../../assets/facebook-icon.svg';
import apple from '../../../assets/apple-icon.svg';
import { Link } from 'react-router-dom';
import SingleField from '../SingleField/SingleField'

export default function Login({ loginData, handleInputChange, handleLogin }) {
  function handleClick(e) {
    handleLogin(loginData);
    handleInputChange({
      loginEmail: "",
      loginPassword: "",
    });
    e.preventDefault();
  }

  return (
    <div className="form">
      <h1>Have an account? Log in.</h1>
      <form>
        <SingleField
          inputTitle="Email"
          inputID="loginEmail"
          inputClass="form-email icon-input"
          inputType="email"
          inputPH="hello@email.com"
          inputValue={loginData.loginEmail}
          handleInputChange={handleInputChange}
        />
        <SingleField
          inputTitle="Password"
          inputID="loginPassword"
          inputClass="form-password icon-input"
          inputType="password"
          inputPH="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          inputValue={loginData.loginPassword}
          handleInputChange={handleInputChange}
        />
        <p id="login-forgot-password">Forgot password?</p>
        <button className="form-submit" onClick={(e) => handleClick(e)}>
          Log in
        </button>
        <p className="form-separator">
          <span>OR</span>
        </p>
        <button className="gmail">
          <img src={google} alt="google icon" />
          Sign in with Google
        </button>
        <button className="facebook">
          <img src={facebook} alt="facebook icon" />
          Sign in with Facebook
        </button>
        <button className="apple">
          <img src={apple} alt="apple icon" />
          Sign in with Apple
        </button>
        <p id="login-signin">
          Don't have an account?
          <Link to="/signup">
            <span> Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
