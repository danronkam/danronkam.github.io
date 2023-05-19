import React from "react";
import { Link } from "react-router-dom";
import "./Tldr.css"
import ProjectsIndex from "../ProjectsIndex";


const TLDR = () => {

    
    const emailClick = (e) =>{
        e.preventDefault();
        window.location.href = 'mailto:danronkam@gmail.com';
    }

    return(
        <> 



        <div className="tldr-container">
            <div className="text-container">
                
                <p className="tldr-text">I'm <b id="name">Dan</b>. I'm a Full Stack Engineer with expierence building client & server-side web application using Javascript.</p>
                <p className="tldr-text">I mainly work within <b className="blue">React</b>, but I'm always expanding my tools and technologies. I'm currently working on a <b className="blue">MEAN</b> stack application to better my understanding of <b className="blue">TypeScript</b> and <b className="red">Angular</b>, but I also have frontend expierence with <b className="gray">Next.js</b>, <b className="yellow">JavaScript</b>, and <b className="red">SEO Optimization</b>.  </p>
                <p className="tldr-text">On the Backend I have expierence with <b className="red">Ruby on Rails</b>, <b className="green">Node.js</b>, <b className="green">MongoDB</b>, <b className="orange">AWS S3/IAM</b>, and <b className="orange">SQL</b> based <b className="blue">CMS</b> like <b className="gray">WordPress</b>. </p>
                <p className="tldr-text">Previously, I've worked in Publishing and have expierence in content production, copy editing, and the <b className="red">Adobe</b> Suite.</p>
            </div>

            <ProjectsIndex />

            <h1 className="selected-works-title">CONTACT</h1>
            <div className="contact-container">
                <button onClick={emailClick} target="_blank" className="contact-link"> Email </button>  <br />
                <Link to={{ pathname: "https://linkedin.com/in/danronkam" }} target="_blank" className="contact-link"> Linkedin </Link> <br />
                <Link to={{ pathname: "https://github.com/danronkam" }} target="_blank" className="contact-link"> Github </Link>

            </div>
            
        </div>
        
        </>
    )
}


export default TLDR