import React, { useState } from 'react'
import './TagField.css'
import close from '../../../assets/X.svg'

export default function TagField({ inputID, inputTitle, inputPH }) {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    const value = e.target.value.trim();
    console.log(value);
    if (e.key === 'Enter' && value) {
      setTags([...tags, value]);
      e.target.value = '';
      e.preventDefault();
    } else return;
  }

  function deleteTag(pIndex) {
    setTags(tags.filter((tag, index) => pIndex !== index));
  }

  return (
    <div id="tag-field">
      <label for={inputID}>{inputTitle}</label>
      <div id="tag-container">
        {tags.map((tag, index) => (
          <div>
            <p>{tag}</p>
            <img
              src={close}
              alt="close icon"
              onClick={() => deleteTag(index)}
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
