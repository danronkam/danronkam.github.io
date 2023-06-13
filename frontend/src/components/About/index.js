import React, { useLayoutEffect } from "react";

const About = () => {

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    })

    const listSchema = [
        {
            id: 1,
            img: "",
            text: ""
        }
    ]


    return(
        <>
        <div className="blogpost-container">

            <div className="blogpost-header">
                <h1 className="blogpost-title">About Dan Kam</h1>
                <p className="blogpost-description">Full Stack Engineer</p>
                <div className="blogpost-tags">
                        <div className="label">Type</div>
                        <div>Human</div>
                </div>
                <div className="blogpost-tags">
                        <div className="label">Updated</div>
                        <div>June 2023</div>
                </div>
                <hr />

            </div>


            <div className="about-body" >
                <div className="introduction">
                    <h2>Introduction</h2>
                        <p>Hey, I’m Dan Kam A Full Stack Software Enginner with a strong creative side who bridges the gaps between product, design, and engineering. I’m a recent graduate of App Acaemy and have previously worked for 5+ years in publishing and marketing.</p>
                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>
                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>
                    <hr />
                </div>

                <div className="uses">
                    <h2>Uses</h2>
                        <p>Hey, I’m Dan Kam A Full Stack Software Enginner with a strong creative side who bridges the gaps between product, design, and engineering. I’m a recent graduate of App Acaemy and have previously worked for 5+ years in publishing and marketing.</p>
                    <hr />

                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>
                </div>

                <div className="code-editor">
                    <h2>Code Editor</h2>
                        <p>Hey, I’m Dan Kam A Full Stack Software Enginner with a strong creative side who bridges the gaps between product, design, and engineering. I’m a recent graduate of App Acaemy and have previously worked for 5+ years in publishing and marketing.</p>
                    
                        <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>
                    <hr />
                </div>

                <div className="Hardware">
                    <h2>Hardware</h2>
                       <p>Hey, I’m Dan Kam A Full Stack Software Enginner with a strong creative side who bridges the gaps between product, design, and engineering. I’m a recent graduate of App Acaemy and have previously worked for 5+ years in publishing and marketing.</p>
                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>I'm passionate about:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>
                    
                    <hr />
                </div>
                                

                <hr />

            </div>




        </div>
        
        </>
    )
}

export default About