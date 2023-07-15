import React from "react";
import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="login">
      <div className="login-side-image" />
      <div className="login-panel">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
