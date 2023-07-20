import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';
import DoubleField from './DoubleField/DoubleField';

export default function ArtistForm() {
  return (
    <div className="form">
      <h1>Let's set up your Teaching Artist profile!</h1>
      <form>
        <DoubleField
          leftInputID="artist-firstname"
          rightInputI="artist-lastname"
          leftInputTitle="First name"
          rightInputTitle="Last name"
          inputType="text"
          leftInputPH="Jane"
          rightInputPH="Doe"
        />
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
