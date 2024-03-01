import {useRef} from 'react'
import emailjs from "@emailjs/browser"


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        
    }


    return(
        <>
            <div className="content-container">
                <div className="content-left">
                    <h1 className="content-title"> Contact </h1>
                    <p className="content-description"> find me online, click the links copy, it's 2024 no more mailto </p>
                    <div className="tag-wrapper">
                        <div className="content-tags flex-child">
                            <div className="label">Email</div>
                            <div className="tags">danronkam@gmail.com</div>
                        </div>
                        <div className="content-tags flex-child">
                            <div className="label">Phone</div>
                            <div className="tags">808-256-6994</div>
                        </div>
                    </div>
                    <hr />

                    <div className="content-body">
                        <div className="introduction">
                            <h2 className="content-heading"> Dan Online </h2>
                                <ul className="about-list">
                                    <li> <a href="https://linkedin.com/in/danronkam" target="_blank"> 📓  Linkedin </a></li>
                                    <li> <a href="https://github.com/danronkam" target="_blank"> 📓  Github </a></li>
                                    <li> <a href="designdk.substack.com" target="_blank"> 📓  Substack </a></li>
                                    <li> <a href="https://medium.com/@danronkam" target="_blank"> 📓  Medium </a></li>
                                </ul>
                            <h2 className="content-heading"> Dan irl </h2>
                                <ul className="about-list">
                                    <li> <a> 📓  Tiktok </a></li>
                                    <li> <a> 📓  Twitter </a></li>
                                    <li> <a> 📓  Instagram </a></li>
                                    <li> <a> 📓  Medium </a></li>
                                </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact