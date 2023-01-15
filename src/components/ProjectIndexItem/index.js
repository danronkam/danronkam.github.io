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
        <div className="project-container">
            <div className="project-container-left">
                <h1 className="left-title pj-title">{title}</h1>
                {tags.map(tag => {
                    return <button disabled  className="tag"> {tag} </button>
                })}
                <p className="project-description">{bio}                </p>
                <br />
                <div className="links-container">
                    <Link to={{ pathname: {codeSrc} }} target="_blank" className="pj-links">Code</Link> <Link to={{ pathname: {liveSrc} }} target="_blank" className="pj-links">Demo</Link>
                </div>
            </div>
            <div className="project-container-right">
                <img src={imgSrc} alt={altTxt} className="comp-gifs right-img"/>
            </div>
                
        </div>
        
        </>
    )
}

export default ProjectIndexItem