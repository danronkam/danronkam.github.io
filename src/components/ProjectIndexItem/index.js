import React from "react";
import { Link } from "react-router-dom";
import "./ProjectIndexItem.css"


const ProjectIndexItem = (project) => {

    const work = project.projectData;
    const title = work.title;
    const imgSrc = work.img;
    const altTxt = work.alt;
    const tags = work.tags;
    const bio = work.bio;
    const liveSrc = work.live;
    const codeSrc = work.code;

    return(
        <>

        <div class="pj-window">
            <div class="pj-header">
                <div className="header-left">
                    <p>{title}</p>
                </div>
                <div className="header-right">
                    <button className="icons">?</button>
                    <button className="icons">X</button>
                </div>
            </div>
            <div className="nav-tag">
                {tags.map(tag => {
                        return <button disabled  className="tag"> {tag} </button>
                })}
            </div>

            
            <div className="pj-body">
                <img src={imgSrc} alt={altTxt} className="comp-gifs right-img"/>
                <p className="pj-description">{bio}                </p>
                <div className="links-container">
                    <Link to={{ pathname: {codeSrc} }} target="_blank" className="pj-links">Code</Link> <Link to={{ pathname: {liveSrc} }} target="_blank" className="pj-links">Demo</Link>
                </div>

            </div>
        </div>

        
        </>
    )
}

export default ProjectIndexItem