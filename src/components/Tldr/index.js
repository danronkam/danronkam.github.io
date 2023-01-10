import React from "react";
import "./Tldr.css"


const TLDR = () => {

    return(
        <>
        <div className="tldr-container">
            <div className="text-container">
                <p className="tldr-text">Hi I'm <b id="name">Dan</b>. I'm a Full Stack Engineer with expierence building client & server-side web application using Javascript.</p>
                <p className="tldr-text">I mainly work within <b>React</b>, but I'm always expanding my tools and technologies. I'm currently working on a <b>TypeScript</b> project, but I also have frontend expierence with <b>Next.js</b>, <b>JavaScript</b>, and <b>SEO Optimization</b>.  </p>
                <p className="tldr-text">On the Backend I have expierence with <b>Ruby on Rails</b>, <b>Node js</b>, <b>MongoDB</b>, <b>AWS S3/IAM</b>, and <b>SQL</b> based <b>WordPress</b> like <b>WordPress</b>. </p>
                <p className="tldr-text">Previously I worked in Publishing and have expierence in content production, copy editing, and the Adobe Suite.</p>
            </div>
            <div className="projects-container">
                <h1 className="projects-title">Selected Projects</h1>
                <div className="project-right-container">
                    <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_pc_gif.gif" alt="derailed gif" className="comp-gifs right-img"/>
                </div>
                <div className="project-left-container">
                    <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/dkfm_pc_gif.gif" alt="dkfm rotating 3d chrome logo" className="comp-gifs left-img"/>
                </div>
                <div className="project-right-container">
                    <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/heard_pc_gif.gif" alt="heard gif" className="comp-gifs right-img"/>
                </div>
            </div>
            <div className="contact-container">
                <h1 className="contact-title">CONTACT</h1>
            </div>
            
        </div>
         <h1>TOO LONG DIDNT READ</h1>
        
        </>
    )
}


export default TLDR