import React from "react";
import LogoCube from "../Cube";
import "./Banner.css"


const Banner = () => {
  


  return(
    <>
      <div className="banner-container">
        <div className="banner-left">
          <p className="banner-text">
            Hi 👋 I'm <b className="name">Dan Kam</b>, <br /> a Full Stack Software Engineer 👨‍💻<br /> & I build Blah Blah Blah Blah Blah Blah
          </p>
        </div>
        <div className="banner-right">
          <LogoCube />
        </div>
      </div>
    </>
  )

};

export default Banner