import React from "react";
import Button from "./Button/Button";
import logo from "../../../assets/FYA logo.png";
import image from "../../../assets/Vector.png";
import filearrow from "../../../assets/file-arrow.png";
import "./Upload.css";

const VerificationInfo = () => {
  return (
    <div className="verification-info">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <h1 className="text-wrapper">Please verify your account</h1>
            <p className="p-verify">
              Verify your account by uploading documents and providing information to confirm your status as an educator
              or teaching <br />
              artist.
            </p>
          </div>
          <div className="frame-3">
            <Button className="button-instance" hierarchy="primary" state="default" text="Verify" />
            <div className="text-wrapper-2">Back</div>
          </div>
        </div>
        <div className="upload-images-files">
          <div className="label">
            <div className="text-wrapper-3">Upload files</div>
            <span className="text-wrapper-3" style={{ color: "red" }}>*</span>
          </div>
          <div className="label">
            <p className="e-g-teaching">
              e.g. teaching certificate, employee ID, pay stub, letter of employment, <br />
              faculty directory, resume, or website
            </p>
          </div>
          <div className="input-field">
            <div className="frame-4">
              <img className="file-arrow-up" alt="File arrow up" src={filearrow} />
              <p className="p">Drag a file here or browse to upload</p>
              <Button className="design-component-instance-node" hierarchy="primary" state="default" text="Browse" />
            </div>
          </div>
        </div>
        <p className="if-you-are">
          <span className="span">
            If you are experiencing issues during the verification process, <br />
            please contact{" "}
          </span>
          <a className="text-wrapper-4" href="mailto:info@changearts.org">
            info@changearts.org
          </a>
          <span className="span">. </span>
        </p>
        <img className="vector" alt="Vector" src={image} />
        <img className="FYA-logo" alt="Fya logo" src={logo} />
      </div>
    </div>
  );
};

export default VerificationInfo;
