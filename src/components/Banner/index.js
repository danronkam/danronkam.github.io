import React from "react";
import LogoCube from "../Cube";
import {Link} from 'react-router-dom'
import "./Banner.css"


const Banner = () => {
  


  return(
    <>
      <div className="banner-container">
        <div className="banner-left">
          <p className="banner-text">
            Hi 👋 I'm <b className="name">Dan Kam</b>, <br /> a <b className="jobtitle"> Branding Consultant </b> 🏬 <br /> & <b className="jobtitle"> Full Stack Software Engineer </b> 👨‍💻
          </p>
          <Link to={"/about"} className="highlight-link learn-more">
            about →
          </Link> <br />
          <Link to={"/services"} className="highlight-link learn-more">
            services →
          </Link> <br />

        </div>
        <div className="banner-right">
          <LogoCube />
        </div>
      </div>
    </>
  )

};

export default Banner