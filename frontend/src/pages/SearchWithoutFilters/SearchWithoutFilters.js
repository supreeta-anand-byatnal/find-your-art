import React, { useState } from 'react';
import "./SearchWithoutFilters.css";
import EventGrid from '../../components/EventGrid/EventGrid';
import artsEventImage from '../../assets/arts_event_search_tab.png';
import teachingArtistImage from '../../assets/teaching_artist_search_tab.png';

export default function SearchWithoutFilters() {
  const [searchInput, setSearchInput] = useState('');
  const [tabImage, setTabImage] = useState(artsEventImage);
  const [clicked, setClicked] = useState(false);

  const handleSearch = () => {
    console.log("Searching for ", searchInput);
  }

  return (
    <div className="search-page">
      <div className="search-container">
        <div className='tab-container' style={{backgroundImage: `url(${tabImage})`}}>
          <button
            type="button"
            className={`tab-button ${clicked ? 'clicked' : ''}`}
            onClick={() => {
              setClicked(!clicked);
              setTabImage(tabImage === artsEventImage ? teachingArtistImage : artsEventImage);
            }}>
            {tabImage !== artsEventImage ? 'Arts Events' : 'Teaching Artist'}
          </button>

          <div className='input-container'>
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
              onClick={() => handleSearch(searchInput)}>Search
            </button>
          </div>
        </div>

      </div>
      <div className='page-container-without-filter'>
        <div className="event-container-without-filter">
          <>
            <EventGrid className='event-grid-without-filter' numResults={5}></EventGrid>
          </>
        </div>
      </div>
    </div>
  );
}
