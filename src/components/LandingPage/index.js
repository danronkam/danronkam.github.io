import Link from 'next/link';
import React, { useState } from 'react';

const LandingPage = () => {
  const [subheading, setSubheading] = useState("web dev");

  const handleSubheadingChange = () => {
    setSubheading(prevSubheading => prevSubheading === "web dev" ? "bev dev" : "web dev");
  };

  return (
    <div className="slideshow">
      <h2 className='landing-name'>Dan Kam:</h2>
      <h3 onClick={handleSubheadingChange} className='landing-subHead swipe'>
        {subheading}
        </h3>
      <Link exact to={'/'} className='landing-Link'>
        learn more...
      </Link>
    </div>
  );
};

export default LandingPage;
