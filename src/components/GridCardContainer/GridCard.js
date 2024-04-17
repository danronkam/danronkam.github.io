import React from 'react';

const GridCard = ({ cardPayload }) => {
    let imgSrc, heading, body;

    if(cardPayload) {
        imgSrc 
    }


  return (
    <div className="grid-card">
      <img src={imageSrc} alt={title} className="grid-card-image" />
      <div className="grid-card-content">
        <h2 className="grid-card-title">{title}</h2>
        <p className="grid-card-description">{description}</p>
      </div>
    </div>
  );
};

export default GridCard;
