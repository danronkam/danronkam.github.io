import React from "react";


const Footer = () => {


    return(
        <>
        <footer>
            <div className="footer-container">
                <div className="social-links">
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://your-substack.substack.com/" target="_blank" rel="noreferrer">
                    <FaSubstack />
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