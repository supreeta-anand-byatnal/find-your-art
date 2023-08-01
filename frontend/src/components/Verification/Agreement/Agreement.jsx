import React, {useState} from "react";
import Button from "./Button/Button";
import { Link } from "react-router-dom";

import "./Agreement.css";
import logo from "../../../assets/FYA logo.png";
import img from "../../../assets/Vector.png";

const Verification = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const handleOnClick = () => {
        if (isChecked) {
            window.location.href = "/upload";
          }
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
              provide tailored resources and features designed for your needs. <br />
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
          <button
          className={`button button-instance ${isChecked ? 'button-checked' : 'button-unchecked'} ${isChecked ? '' : 'disabled'}`}
          onClick={handleOnClick}
          disabled={!isChecked}
        >
          Continue to verification
        </button><div className="text-wrapper-2">Back</div>
          </div>
        </div>
        <img className="vector" alt="Vector" src={img} />
        <img className="FYA-logo" alt="Fya logo" src={logo} />
      </div>
    </div>
  );
};
export default Verification;