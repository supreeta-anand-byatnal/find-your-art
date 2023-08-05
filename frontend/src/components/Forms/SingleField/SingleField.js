import React from 'react'
import './SingleField.css'

export default function SingleField({
  inputTitle,
  inputID,
  inputClass = "",
  inputType,
  inputPH,
  inputValue,
  handleInputChange
}) {

  function handleChange(value) {
    handleInputChange({[inputID]: value})
  }

  return (
    <div id="single-field">
      <label for={inputID}>{inputTitle}</label>
      <input
        id={inputID}
        className={inputClass}
        type={inputType}
        placeholder={inputPH}
        value={inputValue}
        onChange={e => handleChange(e.target.value)}
      ></input>
    </div>
  );
}
