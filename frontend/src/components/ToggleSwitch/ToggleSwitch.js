import './ToggleSwitch.css';

export default function ToggleSwitch( {onChange} ) {
    return (
        <div>
            <label class="switch">
            <input type="checkbox" onChange={onChange}/>
            <span class="slider round"></span>
            </label>
        </div>
    );
};