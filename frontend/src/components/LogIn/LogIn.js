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
            <input></input>
            <label for="password">Password</label>
            <input></input>
            <p>Forgot password?</p>
            <button>Log in</button>
            <button>Log in</button>
            <button>Log in</button>
            <button>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}