import React from "react";
import "./Review.css";

import logo from "../../../assets/FYA logo.png";
import img from "../../../assets/Vector.png";


const VerificationUnder = () => {
  return (
    <div className="verification-under">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <h1 className="text-wrapper">Verification under review</h1>
            <p className="our-admin-team-will">
              Our admin team will notify you via email when your account has been successfully activated.
              <br />
              <br />
              Please note that account verification is required for: <br />
              Purchasing and/or requesting events/services <br />
              Bookmarking events <br />
              Uploading events
              <br />
              <br />
              Until your account is verified, these features will not be accessible. <br />
              <br />
              In the meantime, please feel free to browse all upcoming events.
            </p>
          </div>
          <div className="frame-wrapper">
            <div className="frame-3">
              <div className="button-instance" hierarchy="primary" state="default" text="Login" />
              <a className="text-wrapper-2" href="/home">Back to home page</a>
            </div>
          </div>
        </div>
        <img className="vector" alt="Vector" src={img} />
        <img className="FYA-logo" alt="Fya logo" src={logo} />
      </div>
    </div>
  );
};
export default VerificationUnder;