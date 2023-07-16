import React from "react";
import "./RoleForm.css";

export default function RoleForm() {
  return (
    <div id="role-form">
      <h1 id="role-title">Welcome! What is your role?</h1>
      <form>
        <button className="role-button" type="button" value="teacherEducator">
          Teacher/Educator
        </button>
        <button className="role-button" type="button" value="artOrganization">
          Art organization
        </button>
        <button className="role-button" value="teachingArtist">
          Teaching artist
        </button>
      </form>
    </div>
  );
}
