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
            Hi 👋 I'm <b className="name">Dan Kam</b>, <br /> a <b className="jobtitle"> Full Stack Software Engineer </b> 👨‍💻<br /> & I blur the line between <br /> dev & design
          </p>
          <Link to={"/about"} className="highlight-link learn-more">
            about me →
          </Link> <br />
          <Link to={"/ecomm"} className="highlight-link learn-more">
            my work →
          </Link>
        </div>
        <div className="banner-right">
          <LogoCube />
        </div>
      </div>
    </>
  )

};

export default Banner