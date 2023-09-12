import React from 'react';
import './Forms.css';
import { Link } from 'react-router-dom';

export default function RoleForm({signUpData, handleSignUpInput, handleSignUpRequest}) {
  function handleClick(value) {
    handleSignUpInput({ signUpRole: value });
  }

  return (
    <div className="form">
      <h1>Welcome! What is your role?</h1>
      <form>
        <Link to="/signup/educator">
          <button className="form-submit" type="button" value="teacherEducator" onClick={(e) => handleClick("educator")}>
            Teacher/Educator
          </button>
        </Link>
        <Link to="/signup/organization">
          <button className="form-submit" type="button" value="artOrganization" onClick={(e) => handleClick("organization")}>
            Art organization
          </button>
        </Link>
        <Link to="/signup/artist">
          <button className="form-submit" value="teachingArtist" onClick={(e) => handleClick("artist")}>
            Teaching artist
          </button>
        </Link>
      </form>
    </div>
  );
}
