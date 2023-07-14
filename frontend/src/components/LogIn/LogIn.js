import './LogIn.css';
import sideImage from '../../assets/side-image.png'

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
            <p>Forgot password?</p>
            <button>Log in</button>
            <p id="separator"><span>OR</span></p>
            <button id="gmail">Sign in with Google</button>
            <button id="facebook">Sign in with Facebook</button>
            <button id="apple">Sign in with Apple</button>
          </form>
        </div>
      </div>
    </div>
  )
}