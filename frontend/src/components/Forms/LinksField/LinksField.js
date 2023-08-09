import React, { useState } from 'react'
import './LinksField.css'

export default function LinksField({inputID, inputTitle, inputPH, signUpData, handleSignUpInput}) {

  function handleClick(e) {
    handleSignUpInput({ [inputID]: [...signUpData.signUpLinks, ""] })
    e.preventDefault();
  }

  function updateLink(e, pIndex) {
    handleSignUpInput({ [inputID]: signUpData.signUpLinks.map((link, index) => (index === pIndex ? e.target.value : link)) });
  }

  function deleteLink(e, pIndex) {
    handleSignUpInput({ [inputID]: signUpData.signUpLinks.filter((link, index) => pIndex !== index) })
    e.preventDefault();
  }

  return (
    <div id="links-field">
      <label>{inputTitle}</label>
      {signUpData.signUpLinks.map((link, index) => (
        <div>
          <input type="text" placeholder={inputPH} value={signUpData.signUpLinks[index]} onChange={(e) => updateLink(e, index)}></input>
          <button id="links-delete" onClick={(e) => deleteLink(e, index)}>
            Remove
          </button>
        </div>
      ))}
      <button id="links-add" onClick={(e) => handleClick(e)}>
        Add link
      </button>
    </div>
  );
}
