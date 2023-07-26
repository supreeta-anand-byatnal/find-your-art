import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';
import DoubleField from './DoubleField/DoubleField';
import TagField from './TagField/TagField';

export default function EducatorForm() {
  return (
    <div className="form">
      <h1>Let's set up your Teacher/Educator profile!</h1>
      <DoubleField
        leftInputID="educator-firstname"
        rightInputID="educator-lastname"
        leftInputTitle="First name"
        rightInputTitle="Last name"
        inputType="text"
        leftInputPH="Jane"
        rightInputPH="Doe"
      />
      <SingleField
        inputTitle="Pronouns"
        inputID="educator-pronouns"
        inputType="text"
        inputPH="she/him/they"
      />
      <SingleField
        inputTitle="School name or organization name"
        inputID="educator-employer"
        inputType="text"
        inputPH="Elementary School of Arts, Educator Company, etc."
      />
      <TagField
        inputID="educator-subjects"
        inputTitle="Subject(s)"
        inputPH="History, math, etc."
      />
      <TagField
        inputID="educator-association"
        inputTitle="Grade Level(s) or Group Association"
        inputPH="4th Grade, family, etc."
      />
      <DoubleField 
        leftInputID="educator-city"
        rightInputID="educator-zip"
        leftInputTitle="City"
        rightInputTitle="Zip Code"
        inputType="text"
        leftInputPH="Atlanta, Seattle, etc."
        rightInputPH="000000"
      />
      <button className="form-submit">Next</button>
    </div>
  );
}
