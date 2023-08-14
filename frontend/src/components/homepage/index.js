import React from "react";
import "./homepage.css"
import Banner from "../Banner";
import Highlights from "../Highlights";

const Homepage = () => {


    return(
        <>
        <div className="homepage-container">
            <Banner />
            <Highlights /> 
        </div>
        </>
    )
}

export default Homepage