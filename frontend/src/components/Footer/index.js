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
                                    <i className="fab fa-linkedin footer-icon"/>
                                    Linkedin  
                                </a> 
                                <a href="https://github.com/danronkam" target="_blank" rel="noreferrer" className="social-links">
                                    <i className="fab fa-github footer-icon"/>
                                    Github
                                </a>  
                                <a href="https://designdk.substack.com/" target="_blank" rel="noreferrer" className="social-links">
                                    <i className="fab fa-linkedin footer-icon"/>
                                    Substack
                                </a>
                        </p>
                        <br />
                        <p>
                            Built with: 
                                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                                    <i class="fa-brands fa-react"></i>
                                    React 
                                </a>
                                <a href="https://hygraph.com/" target="_blank" rel="noreferrer">
                                    Hygraph
                                </a>
                                <a href="https://p5js.org/" target="_blank" rel="noreferrer">
                                    P5.JS
                                </a>
                        </p>

                    </div>
                </div>

                <div className="right">
                    <Link to={'/blog'}> Blog </Link>
                    <Link to={'/about'}> About </Link>
                </div>

            </div>
        </footer>
        
        </>
    )

}

export default Footer