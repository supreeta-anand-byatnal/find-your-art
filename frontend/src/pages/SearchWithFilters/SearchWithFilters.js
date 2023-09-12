import React, { useState } from 'react';
import "./SearchWithFilters.css";
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import EventGrid from '../../components/EventGrid/EventGrid';

const defaultFilter = {
  teachingArtistService: false,
  virtualEvents: false,
  date: {
    today: false,
    tomorrow: false,
    thisWeekend: false,
    pickADate: false
  },
  location: 0,
  format: {
    performance: false,
    workshopCourse: false,
    museum: false,
    convention: false,
    other: false,
  },
  categories: {
    dance: false,
    mediaArts: false,
    music: false,
    theatre: false,
    visualArts: false,
    other: false
  },
  accessibility: {
    wheelchair: false,
    parking: false,
    publicTransit: false,
    restrooms: false,
    closedCaptioning: false
  }
}

export default function SearchWithFilters() {
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState(defaultFilter);

  const handleSearch = () => {
    console.log("Searching for ", searchInput);
    console.log("Filter: ", filter);
  }

  const handleApply = () => {
    console.log("Handling apply filters...");
  }

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          id="search-input"
          name="input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}/>
        <button
          type="button"
          className="search-button"
          onClick={() => handleSearch(searchInput)}>Search</button>
      </div>
      <div className="page-container-with-filter">
        <div className='filter-container'>
          <SearchFilters name='filters' filter={filter} setFilter={setFilter} defaultFilter={defaultFilter} handleApply={handleApply}></SearchFilters>
        </div>
        <div className='event-container-with-filter'>
          <EventGrid numResults={12}></EventGrid>
        </div>
      </div>
    </div>
  );
}