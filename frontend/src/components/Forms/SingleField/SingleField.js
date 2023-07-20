import React from 'react'
import './SingleField.css'

export default function SingleField({
  inputTitle,
  inputID,
  inputClass = "",
  inputType,
  inputPH,
}) {
  return (
    <div id="single-field">
      <label for={inputID}>{inputTitle}</label>
      <input
        id={inputID}
        className={inputClass}
        type={inputType}
        placeholder={inputPH}
      ></input>
    </div>
  );
}
