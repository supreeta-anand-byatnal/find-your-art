import './LoginForm.css';
import google from '../../assets/google-icon.svg'
import facebook from '../../assets/facebook-icon.svg'
import apple from '../../assets/apple-icon.svg'

export default function LogIn() {
  return (
    <div className='login-form'>                      
      <h1>Have an account? Log in.</h1>
      <form>
        <label for="login-email">Email</label>
        <input id="login-email"></input>
        <label for="login-password">Password</label>
        <input id="login-password"></input>
        <p id="login-forgot-password">Forgot password?</p>
        <button>Log in</button>
        <p id="login-separator"><span>OR</span></p>
        <button id="login-gmail">
          <img src={google} alt="google icon"/>
          Sign in with Google
        </button>
        <button id="login-facebook">
          <img src={facebook} alt="facebook icon"/>
          Sign in with Facebook
        </button>
        <button id="login-apple">
          <img src={apple} alt="apple icon"/>
          Sign in with Apple
        </button>
        <p id="login-signin">
          Don't have an account?
          <span> Sign up</span>
        </p>
      </form>
    </div>
  )
}