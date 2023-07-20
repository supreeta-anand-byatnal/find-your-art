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
}) {
  return (
    <div className="double-field">
      <SingleField
        inputTitle={leftInputTitle}
        inputID={leftInputID}
        inputType={inputType}
        inputPH={leftInputPH}
      />
      <SingleField
        inputTitle={rightInputTitle}
        inputID={rightInputID}
        inputType={inputType}
        inputPH={rightInputPH}
      />
    </div>
  );
}
