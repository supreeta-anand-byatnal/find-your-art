import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';
import DoubleField from './DoubleField/DoubleField';
import TagField from '../Forms/TagField/TagField';
import LinksField from './LinksField/LinksField';

export default function ArtistForm() {
  return (
    <div className="form">
      <h1>Let's set up your Teaching Artist profile!</h1>
      <form>
        <DoubleField
          leftInputID="artist-firstname"
          rightInputID="artist-lastname"
          leftInputTitle="First name"
          rightInputTitle="Last name"
          inputType="text"
          leftInputPH="Jane"
          rightInputPH="Doe"
        />
        <SingleField
          inputTitle="Pronouns"
          inputID="artist-pronouns"
          inputType="text"
          inputPH="she/him/they"
        />
        <SingleField
          inputTitle="Website"
          inputID="artist-website"
          inputType="text"
          inputPH="www.organization.com"
        />
        <LinksField inputTitle="Social Media Link(s)" inputPH="www.yoursocialmedia.com"/>
        <TagField
          inputID="artist-discipline"
          inputTitle="Art Disciplines(s)"
          inputPH="Cinema, painting, etc."
        />
        <DoubleField
          leftInputID="artist-city"
          rightInputID="artist-zip"
          leftInputTitle="City"
          rightInputTitle="Zip Code"
          inputType="text"
          leftInputPH="Atlanta, Seattle, etc."
          rightInputPH="000000"
        />
        <button
          className="form-submit"
          type="submit"
          onSubmit={(e) => console.log("hi")}
        >
          Next
        </button>
      </form>
    </div>
  );
}
