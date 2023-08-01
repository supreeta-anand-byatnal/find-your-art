import React, { useState, useRef } from "react";
import logo from "../../../assets/FYA logo.png";
import image from "../../../assets/Vector.png";
import Button from "./Button/ButtonUpload";
import filearrow from "../../../assets/file-arrow.png";
import "./Upload.css";
import axios from "axios";

const VerificationInfo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleSendVerificationEmail = async () => {
    if (!selectedFile) {
      alert("Please upload a file for verification.");
      return;
    }

    try {
      // Sending the file to the server for verification email
      const formData = new FormData();
      formData.append("file", selectedFile);

      await axios.post("/send-verification-email", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSelectedFile(null);
      alert("Verification email sent successfully!");
    } catch (error) {
      console.error("Error sending verification email:", error);
      alert("Failed to send verification email.");
    }
  };

  const handleOnClick = async () =>  {
    const emailSent = await handleSendVerificationEmail();

    if(emailSent)
    window.location.href = "/review";
    
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    console.log("Selected File:", selectedFile);
    setSelectedFile(null);
  };

  const isVerifyButtonDisabled = !selectedFile;

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
            <button className={`button button-instance${selectedFile ? " cursor-pointer" : ""}`} onClick={handleOnClick} disabled={isVerifyButtonDisabled}>
              Verify
            </button>
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
              <input
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <button
                className="button design-component-instance-node"
                hierarchy="primary"
                onClick={() => fileInputRef.current.click()}
              >
                Browse
              </button>
            </div>
          </div>
          {selectedFile && (
            <div className="file-name-display">
              <p>Selected File: {selectedFile.name}</p>
            </div>
          )}
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
