import React from "react";
import "./splash.css"  
import { Link } from "react-router-dom";

const Splash = () => {


    return(
        <>
        <div className="splash-container">
            <Link to={`/projects`}>Projects</Link>
            <Link to={`/about`}>TLDR</Link>
            <Link to={`/tldr`}>TLDR</Link>

        </div>

        
        </>
    )
}

export default Splash