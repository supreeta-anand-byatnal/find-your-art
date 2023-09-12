import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';
import DoubleField from './DoubleField/DoubleField';
import TagField from '../Forms/TagField/TagField';
import LinksField from './LinksField/LinksField';

export default function ArtistForm({signUpData, handleSignUpInput, handleSignUpRequest}) {

  function handleClick(e) {
    handleSignUpRequest();
    e.preventDefault();
  }

  return (
    <div className="form">
      <h1>Let's set up your Teaching Artist profile!</h1>
      <form>
        <DoubleField
          leftInputID="signUpFirstName"
          rightInputID="signUpLastName"
          leftInputTitle="First name"
          rightInputTitle="Last name"
          inputType="text"
          leftInputPH="Jane"
          rightInputPH="Doe"
          signUpData={signUpData}
          handleSignUpInput={handleSignUpInput}
        />
        <SingleField
          inputTitle="Pronouns"
          inputID="signUpPronouns"
          inputType="text"
          inputPH="she/him/they"
          inputValue={signUpData.signUpPronouns}
          handleInputChange={handleSignUpInput}
        />
        <SingleField
          inputTitle="Website"
          inputID="signUpWebsite"
          inputType="text"
          inputPH="www.organization.com"
          inputValue={signUpData.signUpWebsite}
          handleInputChange={handleSignUpInput}
        />
        <LinksField inputID="signUpLinks" inputTitle="Social Media Link(s)" inputPH="www.yoursocialmedia.com" handleSignUpInput={handleSignUpInput} signUpData={signUpData}/>
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
        <button
          className="form-submit"
          type="submit"
          onClick={e => handleClick(e)}
        >
          Next
        </button>
      </form>
    </div>
  );
}
