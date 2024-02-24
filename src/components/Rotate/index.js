import React, { useState, useEffect } from 'react';
import './RotatingComponent.css';

const RotatingComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="rotating-component" style={{ transform: `rotateY(${scrollPosition}deg)` }}>
    </div>
  );
};

export default RotatingComponent;
