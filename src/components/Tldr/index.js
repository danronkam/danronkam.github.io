import React from "react";
import { Link } from "react-router-dom";
import "./Tldr.css"
import ProjectIndexItem from "../ProjectIndexItem";


const TLDR = () => {

    const projects  = [ 
        {
            id: 1,
            title: "Derailed",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_pc_gif.gif",
            alt: "derailed gif",
            tags: ["Rails", "React", "Redux", "Ruby", "JavaScript", "HTML", "AWS", "CSS"],
            bio: "A fullstack Grailed clone where users can search through filtered listings, review other users profiles, create their own listings, and review products",
            live: "https://dk-derailed.herokuapp.com/",
            code: "https://github.com/danronkam/derailed/"
        },
        {
            id: 2,
            title: "DK-FM",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/dkfm_pc_gif.gif",
            alt: "dk-fm gif",
            tags: ["JavaScript", "HTML", "AWS", "CSS"],
            bio: "  A Javascript music player that selects a list of music and accompanying visuals based on the users mood and preferences",
            live: "https://doafavorfor.me/DKFM247/",
            code: "https://github.com/danronkam/DKFM247"
        },
        {
            id: 3,
            title: "Heard",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/heard_pc_gif.gif",
            alt: "heard gif",
            tags: ["Rails", "React", "Redux", "Ruby", "JavaScript", "HTML", "AWS", "CSS"],
            bio: "A MERN stack app where users can share their secrets anonymously, hear other confessions, and chat with other people in similar situations",
            live: "https://heard--app.herokuapp.com/home",
            code: "https://github.com/danronkam/Heard"
        },
    ]

    const emailClick = (e) =>{
        e.preventDefault();
        window.location.href = 'mailto:danronkam@gmail.com';
    }

    return(
        <> 



        <div className="tldr-container">
            <div className="text-container">
                <p className="tldr-text">Hi I'm <b id="name">Dan</b>. I'm a Full Stack Engineer with expierence building client & server-side web application using Javascript.</p>
                <p className="tldr-text">I mainly work within <b className="blue">React</b>, but I'm always expanding my tools and technologies. I'm currently working on a <b className="blue">TypeScript</b> project, but I also have frontend expierence with <b className="gray">Next.js</b>, <b className="yellow">JavaScript</b>, and <b className="red">SEO Optimization</b>.  </p>
                <p className="tldr-text">On the Backend I have expierence with <b className="red">Ruby on Rails</b>, <b className="green">Node.js</b>, <b className="green">MongoDB</b>, <b className="orange">AWS S3/IAM</b>, and <b className="orange">SQL</b> based <b className="blue">CMS</b> like <b className="gray">WordPress</b>. </p>
                <p className="tldr-text">Previously, I've worked in Publishing and have expierence in content production, copy editing, and the <b className="red">Adobe</b> Suite.</p>
            </div>
            
            <h1 className="selected-works-title">Selected Projects</h1>
            <div className="selected-works-container">
                {projects.map(project => {
                        return <ProjectIndexItem key={project.id} projectData={project} />
                })}
                
            </div>

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