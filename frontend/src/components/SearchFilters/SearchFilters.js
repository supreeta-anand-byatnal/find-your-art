import React, { useEffect } from 'react';
import "./SearchFilters.css";
import Dropdown from '../Dropdown/Dropdown';
import DropdownCheckbox from '../Dropdown/DropdownCheckbox/DropdownCheckbox';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';


export default function SearchFilters( {filter, setFilter, defaultFilter, handleApply} ) {
  
  //const [filter, setFilter] = useState({});
  useEffect(() => {
    resetFilter()
  }, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const toggleValue = (section, attr) => {
    setFilter({...filter, [section]:{...filter[section], [attr]: !filter[section][attr]}})
  }

  const resetFilter = () => {
    console.log("Resetting filter...")
    document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
    document.querySelectorAll('input[type=range]').forEach( el => el.value = 1 );
    setFilter(defaultFilter);
  }

  return (
    <div className="filters-container">
      <h1 className='filters-header'>Filters</h1>
      <span className='toggleswitch-container-1'>
        <label>Teaching artist<br/>
        service</label>
        <ToggleSwitch onChange={() => {setFilter({...filter, teachingArtistService: !filter.teachingArtistService})}}/>
      </span>
      <span className='toggleswitch-container-2'>
        <label>Virtual events</label>
        <ToggleSwitch onChange={() => {setFilter({...filter, virtualEvents: !filter.virtualEvents})}}/>
      </span>
      <Dropdown header="Date">
        <DropdownCheckbox label='Today' callback={() => {toggleValue('date', 'today')}}/>
        <DropdownCheckbox label='Tomorrow' callback={() => {toggleValue('date', 'tomorrow')}}/>
        <DropdownCheckbox label='This Weekend' callback={() => {toggleValue('date', 'thisWeekend')}} />
        <DropdownCheckbox label='Pick a Date' callback={() => {toggleValue('date', 'pickADate')}} />
      </Dropdown>
      <Dropdown header="Location">
        <div class="location-container">
        <label>Miles</label>
          <div>
            <input type="range" min="1" max="100" step="1" id="myRange" onChange={(e, value) => {
              setFilter({...filter, location: Number(e.target.value)})
            }
            }/>
          </div>
        </div>
      </Dropdown>
      <Dropdown header="Format">
        <DropdownCheckbox label='Performance' callback={() => {toggleValue('format', 'performance')}} />
        <DropdownCheckbox label='Workshop / Course' callback={() => {toggleValue('format', 'workshopCourse')}} />
        <DropdownCheckbox label='Museum' callback={() => {toggleValue('format', 'museum')}} />
        <DropdownCheckbox label='Festival' callback={() => {toggleValue('format', 'festival')}} />
        <DropdownCheckbox label='Convention' callback={() => {toggleValue('format', 'convention')}} />
        <DropdownCheckbox label='Other' callback={() => {toggleValue('format', 'other')}} />
      </Dropdown>
      <Dropdown header="Art discipline">
        <DropdownCheckbox label='Dance' callback={() => {toggleValue('categories', 'dance')}} />
        <DropdownCheckbox label='Media arts' callback={() => {toggleValue('categories', 'mediaArts')}} />
        <DropdownCheckbox label='Music' callback={() => {toggleValue('categories', 'music')}} />
        <DropdownCheckbox label='Theatre' callback={() => {toggleValue('categories', 'theatre')}} />
        <DropdownCheckbox label='Visual Arts' callback={() => {toggleValue('categories', 'visualArts')}} />
        <DropdownCheckbox label='Other' callback={() => {toggleValue('categories', 'other')}} />
      </Dropdown>
      <Dropdown header="Accessibility">
        <DropdownCheckbox label='Wheelchair accessible' callback={() => {toggleValue('accessibility', 'wheelchair')}} />
        <DropdownCheckbox label='Parking' callback={() => {toggleValue('accessibility', 'parking')}} />
        <DropdownCheckbox label='Nearby public transit' callback={() => {toggleValue('accessibility', 'publicTransit')}} />
        <DropdownCheckbox label='Restrooms' callback={() => {toggleValue('accessibility', 'restrooms')}} />
        <DropdownCheckbox label='Closed captioning' callback={() => {toggleValue('accessibility', 'closedCaptioning')}} />
      </Dropdown>
      <div className='bottom-buttons'>
        <button className='apply-button' type="button" onClick={handleApply}>Apply</button> 
        <button className='reset-filters-button' type="button" onClick={resetFilter}>Reset Filters</button> 
      </div>
    </div>
  );
}