import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';
import LinksField from './LinksField/LinksField';
import TagField from './TagField/TagField';
import DoubleField from './DoubleField/DoubleField';

export default function OrgForm({ signUpData, handleSignUpInput, handleSignUpRequest }) {
  function handleClick(e) {
    handleSignUpRequest();
    e.preventDefault();
  }

  return (
    <div className="form">
      <h1>Let's set up your Arts Organization profile!</h1>
      <form>
        <SingleField
          inputTitle="Organization name"
          inputID="signUpOrganization"
          inputType="text"
          inputPH="Organization name"
          signUpData={signUpData}
          handleSignUpInput={handleSignUpInput}
        />
        <SingleField
          inputTitle="Website"
          inputID="signUpWebsite"
          inputType="text"
          inputPH="www.organization.com"
          signUpData={signUpData}
          handleSignUpInput={handleSignUpInput}
        />
        <LinksField inputID="signUpLinks" inputTitle="Social Media Link(s)" inputPH="www.yoursocialmedia.com"  handleSignUpInput={handleSignUpInput} signUpData={signUpData}/>
        <TagField
          inputID="signUpDisciplines"
          inputTitle="Art Disciplines(s)"
          inputPH="Cinema, painting, etc."
          signUpData={signUpData}
          handleSignUpInput={handleSignUpInput}
        />
        <DoubleField
          leftInputID="signUpCity"
          rightInputID="signUpZip"
          leftInputTitle="City"
          rightInputTitle="Zip Code"
          inputType="text"
          leftInputPH="Atlanta, Seattle, etc."
          rightInputPH="000000"
          signUpData={signUpData}
          handleSignUpInput={handleSignUpInput}
        />
        <button className="form-submit" onClick={e => handleClick(e)}>Next</button>
      </form>
    </div>
  );
}
