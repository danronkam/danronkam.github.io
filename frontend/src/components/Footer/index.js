import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {


    return(
        <>
        <footer>
            <div className="footer-container">
                <div className="left">
                    <div className="external-links">
                        <p className="social-container"> 
                            Follow me on:
                                <a href="https://www.linkedin.com/in/danronkam" target="_blank" rel="noreferrer" className="social-links">
                                    <img src='https://derailed-seed.s3.us-west-1.amazonaws.com/linkedin.png' alt='Linkedin Logo'className="footer-icon"/>                                    
                                    Linkedin  
                                </a> 
                                <a href="https://github.com/danronkam" target="_blank" rel="noreferrer" className="social-links">
                                    <img src='https://derailed-seed.s3.us-west-1.amazonaws.com/github.png' alt='github Logo' className="footer-icon"/>                                    
                                    Github
                                </a>  
                                <a href="https://designdk.substack.com/" target="_blank" rel="noreferrer" className="social-links">
                                    <img src='https://derailed-seed.s3.us-west-1.amazonaws.com/substack.png' alt='substack' className="footer-icon"/>                                    
                                    Substack
                                </a>
                        </p>
                        <br />
                        <p className="social-container"> 
                            Built with: 
                                <a href="https://react.dev/" target="_blank" rel="noreferrer" className="footer-links">
                                    <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/react.png"  alt="React Logo" className="footer-icon"/> 
                                    React 
                                </a>
                                <a href="https://hygraph.com/" target="_blank" rel="noreferrer" className="footer-links">
                                    <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/hygraph.png" alt="Hygraph Logo" className="footer-icon"/>
                                    Hygraph
                                </a>
                                <a href="https://p5js.org/" target="_blank" rel="noreferrer" className="footer-links">
                                    <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/p5.png" alt="P5.js Logo" className="footer-icon"/> 
                                    P5.JS
                                </a>
                        </p>

                    </div>
                </div>

                <div className="right">
                    <Link to={'/'} className="footer-nav"> Home </Link>
                    <Link to={'/TLDR'} className="footer-nav"> TLDR </Link>
                </div>

            </div>
        </footer>
        
        </>
    )

}

export default Footer