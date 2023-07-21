import React from 'react';
import './SuggestionCard.css';

const SuggestionCard = ({ imageUrl, title, description }) => {
  return (
    <div className="suggestion-card">
      <p>{imageUrl}</p>
      {/* <img src={require(imageUrl)} alt="Event" /> */}
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default SuggestionCard;
