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
    const liveSrc = String(work.live);
    const codeSrc = String(work.code);
    console.log(typeof liveSrc)

    return(
        <>
        <div className="pj-container">
            <div className="pj-window">
                <div className="pj-header">
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
                        <a href={codeSrc} target="_blank" className="icons pj-links">Code</a> <a href={liveSrc} target="_blank" className="icons pj-links">Demo</a>
                    </div>

                </div>
            </div>

        </div>

       

        
        </>
    )
}

export default ProjectIndexItem