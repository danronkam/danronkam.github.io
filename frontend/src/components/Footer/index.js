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
                                <a href="https://www.linkedin.com/in/danronkam" target="_blank" rel="noreferrer">
                                    Linkedin 
                                </a>
                                <a href="https://github.com/danronkam" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                                <a href="https://designdk.substack.com/" target="_blank" rel="noreferrer">
                                    Substack
                                </a>
                        </p>
                        <br />
                        <p>
                            Built with: 
                        </p>

                    </div>
                </div>
                <div className="right">
                    <Link to={'/blog'}> Blog </Link>
                    <Link to={'/about'}> About </Link>

                </div>
                <div className="social-links">
              
                </div>

            </div>
        </footer>
        
        </>
    )

}

export default Footer