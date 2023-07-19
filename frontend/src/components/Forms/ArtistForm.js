import React from 'react';
import './Forms.css';

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
        <label for="artist-website">Website</label>
        <input
          id="artist-website"
          type="text"
          placeholder="www.organization.com"
        />
        <label for="artist-disciplines">Art discipline(s)</label>
        <input
          id="artist-disciplines"
          type="text"
          placeholder="Cinema, painting, etc."
        />
        <label for="artist-city">City</label>
        <input id="artist-city" type="text" placeholder="New York City" />
        <button className="form-submit">Next</button>
      </form>
    </div>
  );
}
