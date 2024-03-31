import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './ClientSlider.css'; 

const ClientSlider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDrag = (e, data) => {
    const { deltaX } = data;
    const newIndex = activeIndex - Math.sign(deltaX);
    const lastIndex = slides.length - 1;
    setActiveIndex(newIndex < 0 ? lastIndex : newIndex > lastIndex ? 0 : newIndex);
  };

  return (
    <div className="slider-container">
      <Draggable axis="x" onDrag={handleDrag}>
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? 'active' : ''}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </Draggable>
    </div>
  );
};

export default ClientSlider;
