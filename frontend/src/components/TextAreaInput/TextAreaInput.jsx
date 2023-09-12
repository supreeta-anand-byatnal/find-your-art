import './TextAreaInput.css';

const TextAreaInput = ({ label, value, onChange }) => (
    <div className="form-group">
      <label htmlFor={label}>{label}:</label>
      <textarea
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
);

export default TextAreaInput;