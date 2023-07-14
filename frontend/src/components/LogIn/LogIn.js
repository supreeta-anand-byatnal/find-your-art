import './LogIn.css';
import google from '../../assets/google-icon.svg'
import facebook from '../../assets/facebook-icon.svg'
import apple from '../../assets/apple-icon.svg'

export default function LogIn() {
  return (
    <div className="login">
      <div className="side-image"/>
      <div className="login-panel">
        <div className='login-form'>
          <h1>Have an account? Log in.</h1>
          <form>
            <label for="email">Email</label>
            <input id="email"></input>
            <label for="password">Password</label>
            <input id="password"></input>
            <p id="forgot-password">Forgot password?</p>
            <button>Log in</button>
            <p id="separator"><span>OR</span></p>
            <button id="gmail">
              <img src={google} alt="google icon"/>Sign in with Google</button>
            <button id="facebook">
            <img src={facebook} alt="facebook icon"/>Sign in with Facebook</button>
            <button id="apple">
            <img src={apple} alt="apple icon"/>Sign in with Apple</button>
            <p id="signup">Don't have an account? <span>Sign up</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}