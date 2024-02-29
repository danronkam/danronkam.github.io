import React, { useLayoutEffect } from "react";
import {Link} from 'react-router-dom'
import './About.css'

const About = () => {
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    })

    return(
        <>
        <div className="content-container" id="about-container">

            <div className="content-left">
                <h1 className="content-title">About Dan Kam</h1>
                <p className="content-description" id="about-description">Developer, Designer, Deployer</p>
                <div className="tag-wrapper">
                    <div className="content-tags flex-child">
                            <div className="label">Type</div>
                            <div className="tags">Human</div>
                    </div>
                    <div className="content-tags flex-child">
                            <div className="label">Updated</div>
                            <div className="tags">Feb 2024</div>
                    </div>
                </div>
                
                <hr />


                <div className="content-body" >
                    <div className="introduction">
                        <h2 className="content-heading">Introduction</h2>
                            <p className=""> 
                                Hi I’m Dan, I’m a Branding Designer turned Web Developer who now combines all those skills to create scalable business and tech solutions for emerging startups. <br />
                                My background is in media, with words and productions appearing in The Boston Globe, Vice, The Overwatch League, ELeague, and many other companies across industries. 
                            </p>

                            <Link to={"/services"} className="learn-more"> 
                                to learn more about my professional services click here 
                            </Link>

                            <h3 className="learn-more">
                                to learn more about me keep scrolling
                            </h3>

                        
                        <h3>I'm passionate about:</h3>
                            <ul className="about-list">
                                <li>📓  Forgotten Design Trends</li>
                                <li>💮  Niche Fragrances</li>
                                <li>⚔️  07 Runscape</li>

                            </ul>
                        <h3>My Current Mission is to:</h3>
                            <ul className="about-list">
                                <li>🛰️  Build custom solutions for expanding businesses</li>
                                <li>💾  Expand my knowledge of emerging AI technologies </li>
                                <li>🚀  Push the limits of Design and Development </li>

                            </ul>

                        <h3>Outside of tech, I've been spending my time:</h3>
                            <ul className="about-list">
                                <li>🚲  Cycling</li>
                                <li>🧼  Soap Making </li>
                                <li>💪  Lifting</li>

                            </ul>

                        <h3>Outside of tech, I've been spending my time:</h3>
                            <ul className="about-list">
                                <li>🚲  Cycling</li>
                                <li>🧼  Soap Making </li>
                                <li>💪  Lifting</li>

                            </ul>
                        <hr />
                    </div>

                    <div className="uses">
                        <h2 className="content-heading">Uses</h2>

                        <h3>Preferred web stack:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/react.png" className="about-img" alt="React Logo"/> <a href="https://react.dev/" target="_blank" rel="noreferrer" > React </a> - UI Library </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/next.png" className="about-img" alt="Next.js Logo"/> <a href="https://nextjs.org/" target="_blank" rel="noreferrer" > Next.js </a> - React Framework </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/mongo.png" className="about-img" alt="Mongo DB Logo"/> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" > MongoDB </a> - NoSQL Database </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/express.png" className="about-img" alt="Express.js Logo"/> <a href="https://expressjs.com/" target="_blank" rel="noreferrer" > Express.js </a> - Backend Framework</li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/node.png" className="about-img" alt="Node.js Logo"/> <a href="https://nodejs.org/en" target="_blank" rel="noreferrer" > Node.js </a> - JavaScript Runtime </li>
                            </ul>

                        <h3>I also use:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/ts.png" className="about-img" alt="Typescript Logo"/> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" > TypeScript </a> - Typed Superset of JavaScript </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/p5.png" className="about-img" alt="P5.js Logo"/> <a href="https://p5js.org/" target="_blank" rel="noreferrer" > p5.js </a> - Creative Coding JavaScript Library </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/3js.png" className="about-img"  alt="Three.js Logo"/> <a href="https://threejs.org/" target="_blank" rel="noreferrer"> Three.js </a> - 3d Graphics Library </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/hygraph.png" className="about-img" alt="Hygraph Logo"/> <a href="https://hygraph.com/" target="_blank" rel="noreferrer" > Hygraph </a> - Headless CMS </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/postgres.png" className="about-img" alt="PostgresQL Logo"/> <a href="https://hygraph.com/" target="_blank" rel="noreferrer" > PostgresQL </a> - Relational Database </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/rails.png" className="about-img" alt="Rails Logo" />  <a href="https://rubyonrails.org/" target="_blank" rel="noreferrer" > Ruby on Rails </a> - Backend Web Application Framework </li>
                            </ul>

                        <h3>& I can help you fix your website on:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/ts.png" className="about-img" alt="Typescript Logo"/> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" > Shopify </a> - Typed Superset of JavaScript </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/p5.png" className="about-img" alt="P5.js Logo"/> <a href="https://p5js.org/" target="_blank" rel="noreferrer" > p5.js </a> - WordPress </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/3js.png" className="about-img"  alt="Three.js Logo"/> <a href="https://threejs.org/" target="_blank" rel="noreferrer"> SquareSpace </a> - 3d Graphics Library </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/hygraph.png" className="about-img" alt="Hygraph Logo"/> <a href="https://hygraph.com/" target="_blank" rel="noreferrer" > Cargo Collective  </a> - Headless CMS </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/postgres.png" className="about-img" alt="PostgresQL Logo"/> <a href="https://hygraph.com/" target="_blank" rel="noreferrer" > PostgresQL </a> - Relational Database </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/rails.png" className="about-img" alt="Rails Logo" />  <a href="https://rubyonrails.org/" target="_blank" rel="noreferrer" > Ruby on Rails </a> - Backend Web Application Framework </li>
                            </ul>

                        <h3>Tools:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/figma.png" className="about-img" alt="Figma Logo"/> <a href="https://www.figma.com/files/recent?fuid=1187876458297796354" target="_blank" rel="noreferrer" > Figma </a> - Interface Design </li>
                                <li> 📓 <a href="https://www.1101.com/store/techo/en/" target="_blank" rel="noreferrer"> Hobonichi Techo </a> - Life Planner </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/blender.png" className="about-img" alt="Blender Logo"/> <a href="https://www.blender.org/" target="_blank" rel="noreferrer"> Blender </a> - 3D Creation Suite </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/adobe.png" className="about-img" alt="Adobe Logo"/> <a href="https://www.adobe.com/" target="_blank" rel="noreferrer"> Adobe </a> - I wish I could quit you </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/nts.png" className="about-img" alt="NTS Logo"/> <a href="https://www.nts.live/" target="_blank" rel="noreferrer"> NTS </a> - Pirate Radio </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/paletton.png" className="about-img" alt="Paletton"/> <a href="https://paletton.com/" target="_blank" rel="noreferrer"> Paletton </a> - Color Scheme Designer </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/anki.png" className="about-img" alt="Anki Logo"/> <a href="https://apps.ankiweb.net/" target="_blank" rel="noreferrer"> Anki </a> - Open-Source Flashcard Program </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/obsidian.png" className="about-img" alt="Obsidian Logo"/> <a href="https://obsidian.md/" target="_blank" rel="noreferrer"> Obsidian </a> - Note Taking Application</li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/to-do.png" className="about-img" alt="To Do Logo"/> <a href="https://todo.microsoft.com/tasks/" target="_blank" rel="noreferrer"> Microsoft To Do </a> - To Do list  </li>

                            </ul>
                    </div>

                    <div className="code-editor">
                        <h2 className="content-heading">Code Editor</h2>                    
                            <h3>Right now I'm using:</h3>

                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/vscode.png" className="about-img" alt="VSCode Logo"/> <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"> Visual Studio Code </a> </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/jetbrains.png" className="about-img" alt="JetBrainds Logo"/> <a href="https://www.jetbrains.com/lp/mono/" target="_blank" rel="noreferrer"> JetBrains Mono </a> - Font </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.vscolors.com/themes/45bfc9eb-5e03-487f-bffe-315fa6881d6a-66125dc6" target="_blank" rel="noreferrer"> Material Theme Ocean High Contrast </a> - Theme </li>
                            </ul>
                        <hr />
                    </div>

                    <div className="Hardware">
                        <h2 className="content-heading">Hardware</h2>

                        <h3>Office Setup:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/aoc.png" className="about-img" alt="AOC Logo"/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank" rel="noreferrer"> AOC C24G1 </a> - Monitor </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/wacom.png" className="about-img" alt="Wacom Logo"/> <a href="https://www.wacom.com/en-us/products/pen-tablets/wacom-intuos" target="_blank" rel="noreferrer"> Wacom Intuos </a> - Drawing Tablet </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.haworth.com/" target="_blank" rel="noreferrer"> Haworth Improv S.E. </a> Office Chair </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/razer.png" className="about-img" alt="Razer Logo"/> <a href="https://www.razer.com/gaming-mice/razer-deathadder-v2-pro" target="_blank" rel="noreferrer"> Razer Deathadder V2 Pro </a> Mouse </li>
                            </ul>

                        <h3>Custom Built Workstation:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.amd.com/en/processors/ryzen-5000-series" target="_blank" rel="noreferrer"> AMG Ryzen 5 2600 </a> - CPU </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.amd.com/en/graphics/radeon-rx-graphics" target="_blank" rel="noreferrer"> RADEON RX 580 </a> - GPU </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.microcenter.com/product/467049/gskill-ripjaws-v-32gb-(2-x-16gb)-ddr4-3200-pc4-25600-cl16-dual-channel-desktop-memory-kit-f4-3200c16d-32g-black" target="_blank" rel="noreferrer"> G. SKill Ripjaws V DDR4 3200 </a> - RAM </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.thermaltakeusa.com/versa-h22.html" target="_blank" rel="noreferrer"> Thermaltake Versa H22 </a> - Case </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/aorus.png" className="about-img" alt="Aorus Logo"/> <a href="https://www.gigabyte.com/Motherboard/X470-AORUS-ULTRA-GAMING-rev-10#kf" target="_blank" rel="noreferrer"> Aorus X470 </a> - Motherboard </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://semiconductor.samsung.com/us/consumer-storage/internal-ssd/870evo/" target="_blank" rel="noreferrer"> Samsung 870 QVO </a> - SSD </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.thermaltakeusa.com/smart-700w.html" target="_blank" rel="noreferrer"> Thermaltake Smart 700 </a> - PSU </li>
                            </ul>

                        <h3>Custom Built Keyboard:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.amazon.com/RK-ROYAL-KLUDGE-Mechanical-Connectable/dp/B08K8ZSB4C" target="_blank" rel="noreferrer"> Royal Kludge 100 </a> - Base </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/akko.png" className="about-img" alt="Akko Logo"/> <a href="https://en.akkogear.com/product/akko-cs-jelly-black-switch-45pcs/" target="_blank" rel="noreferrer"> Akko Jelly Black </a> - Switches </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://ymdkey.com/products/137-mac-normcore-style-keycaps-dye-sub-xda-profile" target="_blank" rel="noreferrer"> YMDK Mac Normcore </a> - Keycaps </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://a.co/d/7J9rAL1" target="_blank" rel="noreferrer"> Foam Silencer Pad </a> - Sound Deadening Mod </li>
                            </ul>

                        <h3>Audio Gear:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/vmoda.png" className="about-img" alt="Vmoda Logo"/> <a href="https://www.v-moda.com/us/en/products/crossfade-3-wireless" target="_blank" rel="noreferrer"> V-Moda Crossfade V3 </a> - Headphones </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/phillips.png" className="about-img" alt="Phillips Logo"/> <a href="https://www.usa.philips.com/" target="_blank" rel="noreferrer"> Philips MC-100 </a> - Cassette / CD System </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt=""/> <a href="https://www.audio-technica.com/en-us/at-pl120" target="_blank" rel="noreferrer"> Audio Technia AT-PL120 </a> - Record Player </li>
                            </ul>

                        <h3>Camera Gear:</h3>
                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt="Sony Logo"/> <a href="https://electronics.sony.com/imaging/interchangeable-lens-cameras/all-interchangeable-lens-cameras/p/ilce7m4-b" target="_blank" rel="noreferrer"> Sony A7 </a> - Camera  </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt="Vmoda Logo"/> <a href="https://a.co/d/g0nbNUN" target="_blank" rel="noreferrer"> Urth Lens Mount Adapter </a> Lens Adaptor for Canon FD Lens  </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt="Vmoda Logo"/> <a href="https://www.cnet.com/reviews/casio-exilim-ex-s2-review/" target="_blank" rel="noreferrer"> Casio EX-S2 </a> - Digi-Camera  </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/external.png" className="about-img" alt="Vmoda Logo"/> <a href="https://a.co/d/19q9Cge" target="_blank" rel="noreferrer"> Olympus Stylus 120 </a> - 35mm Camera  </li>
                            </ul>                        
                    </div>
                                    

                    <hr />

                </div>




            </div>
        </div>
        
        </>
    )
}

export default About