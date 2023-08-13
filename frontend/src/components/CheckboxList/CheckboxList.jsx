import './CheckboxList.css';

const CheckboxList = ({ label, options, selectedOptions, onCheckboxChange }) => {
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      onCheckboxChange(selectedOptions.filter((item) => item !== option));
    } else {
      onCheckboxChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
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
