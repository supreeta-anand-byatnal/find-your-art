import React from 'react';
import './Forms.css';
import { Link } from 'react-router-dom';

export default function RoleForm() {
  return (
    <div className="form">
      <h1>Welcome! What is your role?</h1>
      <form>
        <Link to="/signup/educator">
          <button className="form-submit" type="button" value="teacherEducator">
            Teacher/Educator
          </button>
        </Link>
        <Link to="/signup/organization">
          <button className="form-submit" type="button" value="artOrganization">
            Art organization
          </button>
        </Link>
        <Link to="/signup/artist">
          <button className="form-submit" value="teachingArtist">
            Teaching artist
          </button>
        </Link>
      </form>
    </div>
  );
}
