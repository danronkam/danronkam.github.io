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
            Hi 👋 I'm <b className="name">Dan Kam</b>, <br /> a <b className="jobtitle"> Full Stack Software Engineer </b> 👨‍💻<br /> & I build Blah Blah Blah Blah Blah Blah
          </p>
          <Link>
            Learn more about me
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