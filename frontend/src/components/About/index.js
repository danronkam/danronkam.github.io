import React, { useLayoutEffect } from "react";
import './About.css'

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
                            <li>Forgotten Design Trends</li>
                            <li>Fragrances</li>
                            <li>User Expierences</li>

                        </ul>
                    <h3>My Current Mission is to:</h3>

                        <ul className="about-list">
                            <li>Contribute to high qualifty open source projects</li>
                            <li>Expand my resource Libraries</li>
                            <li>Push the limits of ____</li>

                        </ul>

                    <h3>Outside of tech, I've been spending my time:</h3>

                        <ul className="about-list">
                            <li>Cycling</li>
                            <li>Tinkering</li>
                            <li>_________</li>

                        </ul>
                    <hr />
                </div>

                <div className="uses">
                    <h2>Uses</h2>

                    <h3>Preferred web stack:</h3>

                        <ul className="about-list">
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://react.dev/" target="_blank"> React </a> - UI Library </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://nextjs.org/" target="_blank"> Next.js </a> - React Framework </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.mongodb.com/" target="_blank"> MongoDB </a> - NoSQL Database </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://expressjs.com/" target="_blank"> Express.js </a> - Backend Framework</li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://react.dev/" target="_blank"> Node.js </a> - JavaScript Runtime </li>
                        </ul>

                    <h3>I also use:</h3>

                        <ul className="about-list">
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.typescriptlang.org/" target="_blank"> TypeScript </a> - Typed Superset of JavaScript </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://p5js.org/" target="_blank"> p5.js </a> - Creative Coding JavaScript Library </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://threejs.org/" target="_blank"> Three.js </a> - 3d Graphics Library </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://hygraph.com/" target="_blank"> Hygraph </a> - Headless CMS </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://rubyonrails.org/" target="_blank"> Ruby on Rails </a> - Backend Web Application Framwork </li>
                        </ul>

                    <h3>Tools:</h3>

                        <ul className="about-list">
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.typescriptlang.org/" target="_blank"> Figma </a> - Interface Design </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.1101.com/store/techo/en/" target="_blank"> Hobonichi Techo </a> - Life Planner </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.blender.org/" target="_blank"> Blender </a> - 3D Creation Suite </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.adobe.com/" target="_blank"> Adobe </a> - I wish I could quit you </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.nts.live/" target="_blank"> NTS </a> - Pirate Radio </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://paletton.com/" target="_blank"> Paletton </a> - Color Scheme Designer </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://apps.ankiweb.net/" target="_blank"> Anki </a> - Open-Source Flashcard Program </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://obsidian.md/" target="_blank"> Obsidian </a> - Note Taking Application</li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://todo.microsoft.com/tasks/" target="_blank"> Microsoft To Do </a> - To Do list  </li>

                        </ul>
                </div>

                <div className="code-editor">
                    <h2>Code Editor</h2>                    
                        <h3>Right now I'm using:</h3>

                        <ul className="about-list">
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.typescriptlang.org/" target="_blank"> Visual Studio Code </a> </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.jetbrains.com/lp/mono/" target="_blank"> JetBrains Mono </a> - Font </li>
                            <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.vscolors.com/themes/45bfc9eb-5e03-487f-bffe-315fa6881d6a-66125dc6" target="_blank"> Material Theme Ocean High Contrast </a> - Theme </li>
                        </ul>
                    <hr />
                </div>

                <div className="Hardware">
                    <h2>Hardware</h2>
                    <h3>Office Setup:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>Custom Built Workstation:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>Custom Built Keyboard:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>Audio Gear:</h3>

                        <ul className="about-list">
                            <li>People</li>
                            <li>Places</li>
                            <li>Things</li>

                        </ul>

                    <h3>Camera Gear:</h3>

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