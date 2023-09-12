import React, { useState } from 'react'
import './TagField.css'
import close from '../../../assets/X.svg'

export default function TagField({ inputID, inputTitle, inputPH, signUpData, handleSignUpInput }) {

  function handleKeyDown(e) {
    const value = e.target.value.trim();
    if (e.key === 'Enter' && value) {
      handleSignUpInput({ [inputID]: [...signUpData[inputID], value] });
      e.target.value = '';
      e.preventDefault();
    } else return;
  }

  function handleDeleteTag(pIndex) {
    handleSignUpInput({ [inputID]: signUpData[inputID].filter((tag, index) => pIndex !== index) });
  }

  return (
    <div id="tag-field">
      <label for={inputID}>{inputTitle}</label>
      <div id="tag-container">
        {signUpData[inputID].map((tag, index) => (
          <div>
            <p>{tag}</p>
            <img
              src={close}
              alt="close icon"
              onClick={() => handleDeleteTag(index)}
            />
          </div>
        ))}
        <input
          id={inputID}
          placeholder={inputPH}
          onKeyDown={handleKeyDown}
          text="text"
        ></input>
      </div>
    </div>
  );
}
