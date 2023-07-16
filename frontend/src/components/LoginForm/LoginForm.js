import "./LoginForm.css";
import google from "../../assets/google-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import apple from "../../assets/apple-icon.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="login-form">
      <h1 id="login-title">Have an account? Log in.</h1>
      <form>
        <label for="login-email">Email</label>
        <input id="login-email" type="email" placeholder="hello@email.com" />
        <label for="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <p id="login-forgot-password">Forgot password?</p>
        <button id="login-button">Log in</button>
        <p id="login-separator">
          <span>OR</span>
        </p>
        <button id="login-gmail">
          <img src={google} alt="google icon" />
          Sign in with Google
        </button>
        <button id="login-facebook">
          <img src={facebook} alt="facebook icon" />
          Sign in with Facebook
        </button>
        <button id="login-apple">
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
