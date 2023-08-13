import './CheckboxList.css';

import React, { useState } from 'react';

const CheckboxList = ({ options, selectedOptions, onCheckboxChange }) => {
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      onCheckboxChange(selectedOptions.filter((item) => item !== option));
    } else {
      onCheckboxChange([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h2>Select Options</h2>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
