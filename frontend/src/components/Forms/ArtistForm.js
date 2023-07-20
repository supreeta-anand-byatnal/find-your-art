import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';

export default function ArtistForm() {
  return (
    <div className="form">
      <h1>Let's set up your Teaching Artist profile!</h1>
      <form>
        <div className="form-fullname">
          <div>
            <label for="artist-firstname">First name</label>
            <input
              name="artist-firstname"
              type="text"
              placeholder="Jane"
            ></input>
          </div>
          <div>
            <label for="artist-lastname">Last name</label>
            <input name="artist-lastname" type="text" placeholder="Doe"></input>
          </div>
        </div>
        <SingleField
          inputTitle="Website"
          inputID="artist-website"
          inputType="text"
          inputPH="www.organization.com"
        />
        <SingleField
          inputTitle="Art discipline(s)"
          inputID="artist-disciplines"
          inputType="text"
          inputPH="Cinema, painting, etc."
        />
        <SingleField
          inputTitle="City"
          inputID="artist-city"
          inputType="text"
          inputPH="New York City"
        />
        <button className="form-submit">Next</button>
      </form>
    </div>
  );
}
