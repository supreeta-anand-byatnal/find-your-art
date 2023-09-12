import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';
import DoubleField from './DoubleField/DoubleField';
import TagField from './TagField/TagField';

export default function EducatorForm({ signUpData, handleSignUpInput, handleSignUpRequest }) {
  function handleClick(e) {
    handleSignUpRequest();
    e.preventDefault();
  }

  return (
    <div className="form">
      <h1>Let's set up your Teacher/Educator profile!</h1>
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
        inputTitle="School name or organization name"
        inputID="signUpOrganization"
        inputType="text"
        inputPH="Elementary School of Arts, Educator Company, etc."
        inputValue={signUpData.signUpOrganization}
        handleInputChange={handleSignUpInput}
      />
      <TagField
        inputID="signUpSubjects"
        inputTitle="Subject(s)"
        inputPH="History, math, etc."
        signUpData={signUpData}
        handleSignUpInput={handleSignUpInput}
      />
      <TagField
        inputID="signUpAssociations"
        inputTitle="Grade Level(s) or Group Association"
        inputPH="4th Grade, family, etc."
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
    </div>
  );
}
