import React from "react";
import "./homepage.css"
import Banner from "../Banner";
import Highlights from "../Highlights";
import FlatCube from "../FlatCube";


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