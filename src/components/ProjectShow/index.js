import React, { useLayoutEffect } from "react"
import './ProjectShow.css'

const ProjectShow = (projectData) => {
    const project = projectData.projectData;
    const tech = project.tech;
    const introTxt = project.intro.body;
    const introImg = project.intro.img;
    const planning = project.planning;
    const features = project.features;
    const headerImg = project.headImg;
    const links = project.links;


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
        <div className="content-container" id="pj-container">

            <div className="content-header" >
                <img src={headerImg} alt="header img" className="pj-headerImg"/>
            </div>


            <div className="content-left">

                <h1 className="content-title" id="pj-title">{project.heading}</h1>
                <p className="content-description">
                    {tech.map(techData => {
                        let txt = techData.text
                        let img= techData.img
                        return <>
                          <img src={img}  width={'16px'} height={'16px'} alt="Technology Logo" className="tech-16" key={txt}/> {txt} 
                        </>      
                    })}
                </p>
                <div className="tag-wrapper">
                    <div className="content-tags flex-child">
                            <div className="label">Type</div>
                            <div className="tags">{project.type}</div>
                    </div>
                    <div className="content-tags flex-child">
                            <div className="label">Created</div>
                            <div className="tags">November 2022</div>
                    </div>
                </div>

                <hr/>

                <div className="content-body">

                    <div className="introduction">
                        <h2 className="content-heading">Introduction</h2>
                        {introTxt.map(body => {
                            return <>
                                <p key={body}>{body}</p>
                            </>
                        })}
                        <img src={`${introImg}`} alt="intro img" className="pj-img"/>
                    </div>

                    < hr />

                    <div className="planning" >
                        <h2 className="content-heading">Planning Images</h2>
                        <img src={`${planning.flowImg}`} alt="project flowchart"className="pj-img"/>
                        <img src={`${planning.layoutImg}`} alt="early project design" className="pj-img"/>
                    </div>

                    <hr />

                    <div className="features">
                        <h2 className="content-heading">Features</h2>
                        {features.map(feature => {
                            let title = feature.title;
                            return <>
                                <h3 className="feature-title" key={title}>{title}</h3>
                            </>
                        })}
                        <a href={`${links.code}`} target="_blank" rel="noreferrer" className="button">For more indepth technical writing, check our the repo</a>
                        <a href={`${links.live}`} target="_blank" rel="noreferrer" className="button">Or checkout the live link</a>

                    </div>


                </div>


            </div>

        </div>
        </>
    )
}

export default ProjectShow