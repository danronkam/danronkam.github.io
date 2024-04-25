import React, { useState } from 'react';

const LandingPage = () => {
  const [subheading, setSubheading] = useState("web dev");

  const handleSubheadingChange = () => {
    setSubheading(prevSubheading => prevSubheading === "web dev" ? "bev dev" : "web dev");
  };

  return (
    <div className="slideshow">
      <h2>Dan Kam:</h2>
      <h3 onClick={handleSubheadingChange}>{subheading}</h3>
    </div>
  );
};

export default LandingPAge;
