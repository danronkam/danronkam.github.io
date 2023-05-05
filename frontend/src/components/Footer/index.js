import React from "react";
import "./Footer.css"


const Footer = () => {


    return(
        <>
        <footer>
            <div className="footer-container">
                <div className="social-links">
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                    Linkedin
                </a>
                <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
                    Github
                </a>
                <a href="https://your-substack.substack.com/" target="_blank" rel="noreferrer">
                    Substack
                </a>
                </div>
                <div className="tech-stack">
                <p>Built with React.js and styled with CSS</p>
                </div>
            </div>
        </footer>
        
        </>
    )

}

export default Footer