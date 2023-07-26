import React, {useState} from "react";
import Button from "./Button";

import "./agreement.css";
import logo from "../../assets/FYA logo.png";
import img from "../../assets/Vector.png";

const Verification = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  return (
    <div className="verification">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <h1 className="text-wrapper">Account verification</h1>
            <p className="verification-is">
              Verification is essential to ensure the integrity and credibility of our platform for educators and
              teaching artists. By requesting verification of your information, we can maintain a trusted community and
              provide taiålored resources and features designed for your needs. <br />
              <br />
              Your privacy and data security are our top priorities, and the information provided will be handled with
              the utmost confidentiality.
            </p>
          </div>
          <div className="frame-3">
          <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      </label>
            <p className="p">I agree with the account verification process.</p>
          </div>
          <div className="frame-4">
          <Button
              className= {`button-instance ${isChecked ? 'button-checked' : 'button-unchecked'}`} 
              hierarchy="primary"
              state="default"
              text="Continue to verification"
              disabled={!isChecked}
            /><div className="text-wrapper-2">Back</div>
          </div>
        </div>
        <img className="vector" alt="Vector" src={img} />
        <img className="FYA-logo" alt="Fya logo" src={logo} />
      </div>
    </div>
  );
};
export default Verification;