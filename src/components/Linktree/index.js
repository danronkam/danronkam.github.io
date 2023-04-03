import React from "react";
import './Linktree.css'

const Linktree = () => {


    return(
        <>
        
        
        <div className="linktree-container">
            <div className="pfp-container">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Dan Kam Profile Photo" className="linktree_pfp"/>
                <h1> I'm Dan</h1>
                <h2>Fullstack Developer</h2>
            </div>

            <div className="link-container">
                <a href="https://linkedin.com/in/danronkam" target="_blank" rel="noreferrer"> LinkedIn </a>
                <button className="btn primary"> Projects </button>
                <a> Github </a>    
            </div> 
            
            
        
        </div>
        </>
    )
}

export default Linktree