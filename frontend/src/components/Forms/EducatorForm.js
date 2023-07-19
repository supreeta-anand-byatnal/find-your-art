import React from 'react';
import './Forms.css';

export default function EducatorForm() {
  return (
    <div className="form">
      <h1>Let's set up your Teacher/Educator profile!</h1>
      <div className="form-fullname">
        <div>
          <label for="artist-firstname">First name</label>
          <input name="artist-firstname" type="text" placeholder="Jane"></input>
        </div>
        <div>
          <label for="artist-lastname">Last name</label>
          <input name="artist-lastname" type="text" placeholder="Doe"></input>
        </div>
      </div>
      <label for="educator-employer">Website</label>
      <input
        name="educator-employer"
        type="text"
        placeholder="Elementary School of Arts, Educator Company, etc."
      />
      <label for="educator-subjects">Subject(s)</label>
      <input
        name="educator-subjects"
        type="text"
        placeholder="History, math, etc."
      />
      <label for="educator-city">City</label>
      <input name="educator-city" type="text" placeholder="New York City" />
      <label for="educator-grade">Website</label>
      <input
        name="educator-grade"
        type="text"
        placeholder="Elementary, Middle, High school, etc."
      />
      <button className="form-submit">Next</button>
    </div>
  );
}
