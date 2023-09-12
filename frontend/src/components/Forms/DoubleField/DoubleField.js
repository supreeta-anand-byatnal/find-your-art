import React from 'react'
import SingleField from '../SingleField/SingleField'
import './DoubleField.css'

export default function DoubleField({
  leftInputID,
  rightInputID,
  leftInputTitle,
  rightInputTitle,
  inputType,
  leftInputPH,
  rightInputPH,
  signUpData,
  handleSignUpInput
}) {
  return (
    <div id="double-field">
      <SingleField
        inputTitle={leftInputTitle}
        inputID={leftInputID}
        inputType={inputType}
        inputPH={leftInputPH}
        inputValue={signUpData.leftInputID}
        handleInputChange={handleSignUpInput}
      />
      <SingleField
        inputTitle={rightInputTitle}
        inputID={rightInputID}
        inputType={inputType}
        inputPH={rightInputPH}
        inputValue={signUpData.rightInputID}
        handleInputChange={handleSignUpInput}
      />
    </div>
  );
}
