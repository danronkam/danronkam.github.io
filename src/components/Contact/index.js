import EmailForm from '../EmailForm'
import { useLayoutEffect } from "react";
import "./Contact.css"
import { useState } from 'react';

const Contact = () => {
    
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    });

  const [copied, setCopied] = useState(false);






    return(
        <>

            <div className="content-container" id="contact-container">
                <div className="contact-body">
                    <h1 className="content-title"> Contact </h1>
                    <p className="content-description" id="contact-description"> 
                    Tell me about your project, <br/>
                     I specialize in ecommerce store development and full stack web applications. <br />

                    Send me a message here or contact me directly, danronkam@gmail.com. <br />
                    
                    Find me online & let me do a favor for you.
                    </p>
                    <div className="tag-wrapper">
                        <div className="content-tags flex-child">
                            <div className="label">Online</div>
                            <div className="tags">
                                <a href="https://linkedin.com/in/danronkam" target="_blank" rel="noreferrer" class="contact-socialLink">  <i class="fa-brands fa-linkedin" />  Linkedin </a>
                                <a href="https://github.com/danronkam" target="_blank" rel="noreferrer" class="contact-socialLink"> <i class="fa-brands fa-square-github" />  Github </a>
                                <a href="https://designdk.substack.com" target="_blank" rel="noreferrer" class="contact-socialLink"> <i class="fa-solid fa-up-right-from-square" />  Substack </a>
                                <a href="https://medium.com/@danronkam" target="_blank" rel="noreferrer" class="contact-socialLink"> <i class="fa-brands fa-medium"/>  Medium </a>
                                <a href='https://www.tiktok.com/@doafavorforme' target='_blank' rel="noreferrer" class="contact-socialLink"> <i class="fa-brands fa-tiktok" />  Tiktok </a>
                                <a target='_blank' rel="noreferrer" href='https://twitter.com/kamerugh' class="contact-socialLink"> <i class="fa-brands fa-square-twitter" />  Twitter </a>
                                <a target='_blank' rel="noreferrer" href='https://instagram.com/doafavorforme' class="contact-socialLink"> <i class="fa-brands fa-square-instagram" />  Instagram </a>
                                <a target='_blank' rel="noreferrer" href='https://medium.com/@danronkam' class="contact-socialLink"> 📓  TBD </a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <EmailForm />

                </div>

                
            </div>
        </>
    )
}

export default Contact