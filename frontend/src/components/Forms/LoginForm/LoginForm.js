import './LoginForm.css';
import '../Forms.css';
import google from '../../../assets/google-icon.svg';
import facebook from '../../../assets/facebook-icon.svg';
import apple from '../../../assets/apple-icon.svg';
import { Link } from 'react-router-dom';
import SingleField from '../SingleField/SingleField'

export default function Login() {
  return (
    <div className="form">
      <h1>Have an account? Log in.</h1>
      <form>
        <SingleField
          inputTitle="Email"
          inputID="login-email"
          inputClass="form-email"
          inputType="email"
          inputPH="hello@email.com"
        />
        <SingleField
          inputTitle="Password"
          inputID="login-password"
          inputClass="form-password"
          inputType="password"
          inputPH="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <p id="login-forgot-password">Forgot password?</p>
        <button className="form-submit">Log in</button>
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
