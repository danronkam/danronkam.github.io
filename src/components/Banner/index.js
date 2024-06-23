import React from "react";
import {Link} from 'react-router-dom'
import "./Banner.css"


const Banner = () => {
  


  return(
    <>
      <div 
        className="banner-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
        <div className="banner-left">
          <p className="banner-text">
            Hi 👋 I'm <b className="name">Dan Kam</b>, <br /> I'm a <b className="jobtitle"> Web Developer </b> 🏬 <br /> & <b className="jobtitle"> Digital Solutions Consultant  </b> 👨‍💻
          </p>
          <Link to={"/about"} className="highlight-link learn-more">
            about me →
          </Link> <br />
          <Link to={"/services"} className="highlight-link learn-more tab">
              services →
          </Link> <br />

        </div>
        <div className="banner-right">
        </div>
      </div>
    </>
  )

};

export default Banner