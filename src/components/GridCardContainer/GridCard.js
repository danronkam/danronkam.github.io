import React from 'react';

const GridCard = ({ cardPayload }) => {
    let imgSrc, heading, body;

    if(cardPayload) {

        let cardData = cardPayload.cardPayload;
        imgSrc = cardData.imageSrc;
        heading = cardData.heading;
        body = cardData.body;
    }


  return (
    <div className="grid-card">
      <img src={imageSrc} alt={title} className="grid-card-image" />
      <div className="grid-card-content">
        <h2 className="grid-card-title">{heading}</h2>
        <p className="grid-card-description">{body}</p>
      </div>
    </div>
  );
};

export default GridCard;
