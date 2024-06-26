import { Link } from "react-router-dom";
import "./services.css"
import React, { useLayoutEffect } from "react";

const Services = () => {


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });



    return(
        <>
            <div className="content-container"  id="services-container">
                <div className="hero-container">
                    <h1 className="service-hero-head">
                        Designing, developing, and deploying online content for startups and creators
                    </h1>
                    <p className="service-hero-sub">
                        Working across industries to deliver innovative digital experiences 
                    </p>

                    <Link to={'/contact'} className='service-cta'>
                        let's talk
                    </Link>
                </div>

                <div className="service-grid">
                    <div className="service-item">
                        <div className="service-left left-copy">
                            <h1 className="service-title">
                                Technical
                            </h1>
                            <ul className="service-list">
                                <li className="service-list-item">
                                    Next.js Development
                                </li>
                                <li className="service-list-item">
                                    Headless CMS
                                </li>
                                <li className="service-list-item">
                                    Shopify Development
                                </li>
                                <li className="service-list-item">
                                    React Development
                                </li>
                                <li className="service-list-item">
                                    Node.js Development
                                </li>
                                <li className="service-list-item">
                                    Web Development and SPAs
                                </li>
                                <li className="service-list-item">
                                    Scalabe No Code Website Development 
                                </li>

                            </ul>

                        </div>
                        <div className="service-right">
                            <img alt="iphone mock up" className="service-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/Sequence+01.gif">

                            </img>
                            
                        </div>

                    </div>

                    <div className="service-item">
                        <div className="service-left">
                            <img alt="iphone mock up" className="service-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/marketing_1.gif">
                                
                            </img>

                        </div>
                        <div className="service-right right-copy">
                            <h1 className="service-title">
                                Marketing
                            </h1>
                            <ul className="service-list">
                                <li className="service-list-item">
                                    SEO Optimization
                                </li>
                                <li className="service-list-item">
                                    Campign Strategy
                                </li>
                            </ul>
                            
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="service-left left-copy">
                            <h1 className="service-title">
                                Production
                            </h1>
                            <ul className="service-list">
                                <li className="service-list-item">
                                    Photo and Video Editing 
                                </li>
                                <li className="service-list-item">
                                    Graphic Design
                                </li>
                                <li className="service-list-item">
                                    Supply Chain Management
                                </li>
                                <li className="service-list-item">
                                    Social Media Management
                                </li>
                            </ul>

                        </div>
                        <div className="service-right">
                            <img alt="iphone mock up" className="service-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/iphone_finals.gif">
                                
                            </img>

                        </div>
                    </div>
                    
                </div>


                <Link to={'/contact'} className='service-cta'>
                        need a favor? let's talk
                </Link>
               
            </div>
                
        </>
    )
}

export default Services