import React from 'react'

export default function SingleField({
  inputTitle,
  inputID,
  inputClass = "",
  inputType,
  inputPH,
}) {
  return (
    <>
      <label for={inputID}>{inputTitle}</label>
      <input
        id={inputID}
        className={inputClass}
        type={inputType}
        placeholder={inputPH}
      ></input>
    </>
  );
}
