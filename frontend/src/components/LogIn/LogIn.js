import './LogIn.css';
import sideImage from '../../assets/side-image.png'

export default function LogIn() {
  return (
    <div className="login">
      <div className="login-container">
      <img 
        className="side-image" 
        alt="color gradient" 
        src={sideImage}
      />
      </div>
    </div>
  )
}