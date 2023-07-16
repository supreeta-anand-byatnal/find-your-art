import React from "react";
import "./RoleForm.css";
import { Link } from "react-router-dom";

export default function RoleForm() {
  return (
    <div id="role-form">
      <h1 id="role-title">Welcome! What is your role?</h1>
      <form>
        <Link to="/signup/educator">
          <button className="role-button" type="button" value="teacherEducator">
            Teacher/Educator
          </button>
        </Link>
        <Link to="/signup/organization">
          <button className="role-button" type="button" value="artOrganization">
            Art organization
          </button>
        </Link>
        <Link to="/signup/artist">
          <button className="role-button" value="teachingArtist">
            Teaching artist
          </button>
        </Link>
      </form>
    </div>
  );
}
