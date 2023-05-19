import React from "react";
import "./homepage.css"
import Banner from "../Banner";
import ProjectIndex from "../ProjectsIndex"

const Homepage = () => {


    return(
        <>

        <div className="homepage-container">
            <Banner />
            <ProjectIndex />
            

        </div>
        </>
    )
}

export default Homepage