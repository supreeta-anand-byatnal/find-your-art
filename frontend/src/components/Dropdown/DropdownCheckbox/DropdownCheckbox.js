import './DropdownCheckbox.css'

export default function DropdownCheckbox({ label, callback }) {
    return (
        <div className='container'>
          <label>{label}</label>
          <input className="checkbox" type="checkbox" onChange={callback}/>
        </div>
    );
};