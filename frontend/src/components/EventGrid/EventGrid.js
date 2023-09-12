import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import './EventGrid.css';

export default function EventGrid({ numResults }) {
    return (
        <div>
            <h1 className='search-results-text'>Search Results</h1>
            <p className='number-results-text'>{numResults} results</p>
            <div className='event-grid'>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
                    <div> <EventCard/> </div>
            </div>
        </div>
    );
};