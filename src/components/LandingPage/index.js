import Link from 'next/link';
import React, { useState } from 'react';

const LandingPage = () => {
  const [subheading, setSubheading] = useState("web dev");

  const handleSubheadingChange = () => {
    setSubheading(prevSubheading => prevSubheading === "web dev" ? "bev dev" : "web dev");
  };

  return (
    <div className="landingPage-container">
      <h2 className='landingPage-name'>Dan Kam:</h2>
      <h3 onClick={handleSubheadingChange} className='landing-subHead swipe'>
        {subheading}
        </h3>
      <Link exact to={'/'} className='landingPage-link'>
        learn more...
      </Link>
    </div>
  );
};

export default LandingPage;
