import React from 'react';
import './SuggestionCard.css';

const SuggestionCard = ({ imageUrl, title, description }) => {
  return (
    <div className="suggestion-card">
      <img src={imageUrl} alt="Event" className="suggestion-card__image" />
      <h3 className="suggestion-card__title">{title}</h3>
      <p className="suggestion-card__description">{description}</p>
    </div>
  );
};

export default SuggestionCard;
