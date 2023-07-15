import React from "react";
import "./Signup.css";
import SignupForm from "../../components/SignupForm/SignupForm";

export default function Signup() {
  return (
    <div className="signup">
      <div className="signup-side-image" />
      <div className="signup-panel">
        <SignupForm></SignupForm>
      </div>
    </div>
  );
}
