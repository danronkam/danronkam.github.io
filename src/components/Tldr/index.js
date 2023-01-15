import React from "react";
import { Link } from "react-router-dom";
import "./Tldr.css"


const TLDR = () => {

    return(
        <> 
        <div className="tldr-container">
            <div className="text-container">
                <p className="tldr-text">Hi I'm <b id="name">Dan</b>. I'm a Full Stack Engineer with expierence building client & server-side web application using Javascript.</p>
                <p className="tldr-text">I mainly work within <b className="blue">React</b>, but I'm always expanding my tools and technologies. I'm currently working on a <b className="blue">TypeScript</b> project, but I also have frontend expierence with <b className="gray">Next.js</b>, <b className="yellow">JavaScript</b>, and <b className="red">SEO Optimization</b>.  </p>
                <p className="tldr-text">On the Backend I have expierence with <b className="red">Ruby on Rails</b>, <b className="green">Node.js</b>, <b className="green">MongoDB</b>, <b className="orange">AWS S3/IAM</b>, and <b className="orange">SQL</b> based <b className="blue">CMS</b> like <b className="gray">WordPress</b>. </p>
                <p className="tldr-text">Previously, I've worked in Publishing and have expierence in content production, copy editing, and the <b className="red">Adobe</b> Suite.</p>
            </div>
            <div className="selected-works-container">
                <h1 className="selected-works-title">Selected Projects</h1>
                <div className="project-container">
                    <div className="project-container-left">
                        <h1 className="left-title pj-title">Derailed</h1>
                        <button disabled className="tag">React</button>  <button disabled className="tag">Ruby on Rails</button> <button disabled className="tag">JavaScript</button>  <button disabled className="tag">Ruby</button> <button disabled className="tag">Redux</button> <button disabled className="tag">HTML</button> <button disabled className="tag">CSS</button>

                        <p className="project-tags"> Rails, React, Redux, Ruby, JavaScript, HTML, AWS and CSS</p>
                        <p className="project-description">A fullstack Grailed clone where users can search through filtered listings, review other users profiles, create their own listings, and review products
                        </p>
                        <br />
                        <div className="links-container">
                            <Link to={{ pathname: "hhttps://github.com/danronkam/derailed/" }} target="_blank" className="pj-links">Code</Link> <Link to={{ pathname: "https://dk-derailed.herokuapp.com/" }} target="_blank" className="pj-links">Demo</Link>
                        </div>
                    </div>
                    <div className="project-container-right">
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_pc_gif.gif" alt="derailed gif" className="comp-gifs right-img"/>
                    </div>
                    

                </div>
                <div className="project-container">
                    <div className="project-container-left">
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/dkfm_pc_gif.gif" alt="dkfm rotating 3d chrome logo" className="comp-gifs left-img"/>
                    </div>
                    <div className="project-container-right">
                        <h1 className="left-title pj-title">DK-FM</h1>
                        <button disabled className="tag">Javascript</button> <button disabled className="tag">HTML</button> <button disabled className="tag">CSS</button>
                        <p className="project-tags">Javascript, HTML, CSS</p>
                        <p className="project-description">A Javascript music player that selects a list of music and accompanying visuals based on the users mood and preferences
                        <br />
                        <div className="links-container">
                            <Link to={{ pathname: "https://github.com/danronkam/DKFM247" }} target="_blank" className="pj-links">Code</Link> <Link to={{ pathname: "https://doafavorfor.me/DKFM247/" }} target="_blank" className="pj-links">Demo</Link>
                        </div>
                        </p>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-container-left">
                        <h1 className="left-title pj-title">Heard</h1>
                        <button disabled className="tag">Node.js</button>  <button disabled className="tag">React</button> <button disabled className="tag">Redux</button> <button disabled className="tag">HTML</button> <button disabled className="tag">AWS</button> <button disabled className="tag">MongoDB</button> <button disabled className="tag">CSS</button>
                        <p className="project-description">
                            A MERN stack app where users can share their secrets anonymously, hear other confessions, and chat with other people in similar situations</p>
                            <br />
                        <div className="links-container">
                            <Link to={{ pathname: "https://github.com/danronkam/Heard" }} target="_blank" className="pj-links">Code</Link> <Link to={{ pathname: "https://heard--app.herokuapp.com/" }} target="_blank" className="pj-links">Demo</Link>
                        </div>
                    </div>
                    <div className="project-container-right">
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/heard_pc_gif.gif" alt="heard gif" className="comp-gifs right-img"/>
                    </div>
                </div>
            </div>
            <div className="contact-container">
                <h1 className="contact-title">CONTACT</h1>
                <button className="reveal-button" >EMAIL</button> <br />
                <Link to={{ pathname: "https://linkedin.com/in/danronkam" }} target="_blank" className="contact-link"> LINKEDIN </Link> <br />
                <Link to={{ pathname: "https://github.com/danronkam" }} target="_blank" className="contact-link"> GITHUB </Link>

            </div>
            
        </div>
        
        </>
    )
}


export default TLDR