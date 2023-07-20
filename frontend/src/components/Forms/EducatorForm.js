import React from 'react';
import './Forms.css';
import SingleField from './SingleField/SingleField';
import DoubleField from './DoubleField/DoubleField';

export default function EducatorForm() {
  return (
    <div className="form">
      <h1>Let's set up your Teacher/Educator profile!</h1>
      <DoubleField
        leftInputID="educator-firstname"
        rightInputI="educator-lastname"
        leftInputTitle="First name"
        rightInputTitle="Last name"
        inputType="text"
        leftInputPH="Jane"
        rightInputPH="Doe"
      />
      <SingleField
        inputTitle="Website"
        inputID="educator-employer"
        inputType="text"
        inputPH="Elementary School of Arts, Educator Company, etc."
      />
      <SingleField
        inputTitle="Subject(s)"
        inputID="educator-subjects"
        inputType="text"
        inputPH="History, math, etc."
      />
      <SingleField
        inputTitle="City"
        inputID="educator-city"
        inputType="text"
        inputPH="New York City"
      />
      <SingleField
        inputTitle="Teaching level(s)"
        inputID="educator-grade"
        inputType="text"
        inputPH="Elementary, Middle, High school, etc."
      />
      <button className="form-submit">Next</button>
    </div>
  );
}
