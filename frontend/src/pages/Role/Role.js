import React from "react";
import "./Role.css";
import RoleForm from "../../components/RoleForm/RoleForm";

export default function Role() {
  return (
    <div className="role">
      <div className="role-side-image" />
      <div className="role-panel">
        <RoleForm></RoleForm>
      </div>
    </div>
  );
}
