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
                        <p> 
                            Follor me on:   
                                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                                    Linkedin 
                                </a>
                                <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                                <a href="https://your-substack.substack.com/" target="_blank" rel="noreferrer">
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