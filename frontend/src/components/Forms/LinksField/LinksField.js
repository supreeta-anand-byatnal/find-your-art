import React, { useState } from 'react'
import './LinksField.css'

export default function LinksField() {
  const [links, setLinks] = useState([]);

  function handleClick(e) {
    setLinks([...links, ""]);
    e.preventDefault();
  }

  function updateLink(e, pIndex) {
    setLinks(
      links.map((link, index) => (index === pIndex ? e.target.value : link))
    );
  }

  function deleteLink(e, pIndex) {
    setLinks(links.filter((link, index) => pIndex !== index));
    e.preventDefault();
  }

  return (
    <div id="links-field">
      <label>Social Media Links</label>
      {links.map((link, index) => (
        <div>
          <input type="text" onChange={(e) => updateLink(e, index)}></input>
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
