import './TextInput.css';

const TextInput = ({ label, value, onChange, placeholder, required }) => (
    <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input
            type="text"
            id={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
    </div>
);

export default TextInput;