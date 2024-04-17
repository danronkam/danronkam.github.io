
import React from 'react';
import GridCard from './GridCard';
import 'GridCardContainer.css'

const GridCardContainer = () => {
    const gridArr = [];

  return (
    <div className="grid-container">
      {gridArr.map((gridCard, index) => (
        <GridCard key={index} cardPayload={gridCard} />
      ))}
    </div>
  );
};

export default GridCardContainer;
