import React from 'react';
import './SuggestionCard.css';

const styles = {
  width: '100%',
  height: undefined,
  aspectRatio: 1,
  borderRadius: "16px"
}

const SuggestionCard = ({ imageUrl, title, description }) => {
  return (
    <div className="suggestion-card">
      <img src={imageUrl} style={styles} alt="Event" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default SuggestionCard;
