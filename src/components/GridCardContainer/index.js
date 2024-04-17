
import React from 'react';
import GridCard from './GridCard';

const GridCardContainer = () => {
    const gridArr = [];

  return (
    <div className="grid-container">
      {gridArr.map((gridCard, index) => (
        <GridCard key={index} gridCard={gridCard} />
      ))}
    </div>
  );
};

export default GridCardContainer;
