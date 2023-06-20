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
        <div className="content-container">

            <div className="content-left">
                <h1 className="content-title">About Dan Kam</h1>
                <p className="content-description">Full Stack Engineer</p>
                <div className="tag-wrapper">
                    <div className="content-tags flex-child">
                            <div className="label">Type</div>
                            <div className="tags">Human</div>
                    </div>
                    <div className="content-tags flex-child">
                            <div className="label">Updated</div>
                            <div className="tags">June 2023</div>
                    </div>
                </div>
                
                <hr />


                <div className="content-body" >
                    <div className="introduction">
                        <h2 className="content-heading">Introduction</h2>
                            <p className="">Hey, I’m Dan Kam A Full Stack Software Enginner with a strong creative side who bridges the gaps between product, design, and engineering. I’m a recent graduate of App Acaemy and have previously worked for 5+ years in publishing and marketing.</p>
                        <h3>I'm passionate about:</h3>

                            <ul className="about-list">
                                <li>📓  Forgotten Design Trends</li>
                                <li>💮  Fragrances</li>
                                <li>💻  User Expierences</li>

                            </ul>
                        <h3>My Current Mission is to:</h3>

                            <ul className="about-list">
                                <li>🛰️  Contribute to high qualifty open source projects</li>
                                <li>💾  Expand my resource Libraries</li>
                                <li>🚀  Push the limits of ____</li>

                            </ul>

                        <h3>Outside of tech, I've been spending my time:</h3>

                            <ul className="about-list">
                                <li>🚲  Cycling</li>
                                <li>🛠️  Tinkering</li>
                                <li>🏕️  Outside</li>

                            </ul>
                        <hr />
                    </div>

                    <div className="uses">
                        <h2 className="content-heading">Uses</h2>

                        <h3>Preferred web stack:</h3>

                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/react.png" width={'16px'} height={'16'}/> <a href="https://react.dev/" target="_blank"> React </a> - UI Library </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/next.png" width={'16px'} height={'16'}/> <a href="https://nextjs.org/" target="_blank"> Next.js </a> - React Framework </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/mongo.png" width={'16px'} height={'16'}/> <a href="https://www.mongodb.com/" target="_blank"> MongoDB </a> - NoSQL Database </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/express.png" width={'16px'} height={'16'}/> <a href="https://expressjs.com/" target="_blank"> Express.js </a> - Backend Framework</li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/node.png" width={'16px'} height={'16'}/> <a href="https://react.dev/" target="_blank"> Node.js </a> - JavaScript Runtime </li>
                            </ul>

                        <h3>I also use:</h3>

                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/ts.png" width={'16px'} height={'16'}/> <a href="https://www.typescriptlang.org/" target="_blank"> TypeScript </a> - Typed Superset of JavaScript </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/p5.png" width={'16px'} height={'16'}/> <a href="https://p5js.org/" target="_blank"> p5.js </a> - Creative Coding JavaScript Library </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/3js.png" width={'16px'} height={'16'}/> <a href="https://threejs.org/" target="_blank"> Three.js </a> - 3d Graphics Library </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/hygraph.png" width={'16px'} height={'16'}/> <a href="https://hygraph.com/" target="_blank"> Hygraph </a> - Headless CMS </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/postgres.png" width={'16px'} height={'16'}/> <a href="https://hygraph.com/" target="_blank"> PostgresQL </a> - Relational Database </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/rails.png" width={'16px'} height={'16'}/> <a href="https://rubyonrails.org/" target="_blank"> Ruby on Rails </a> - Backend Web Application Framwork </li>
                            </ul>

                        <h3>Tools:</h3>

                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/figma.png" width={'16px'} height={'16'}/> <a href="https://www.typescriptlang.org/" target="_blank"> Figma </a> - Interface Design </li>
                                <li> 📓 <a href="https://www.1101.com/store/techo/en/" target="_blank"> Hobonichi Techo </a> - Life Planner </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/blender.png" width={'16px'} height={'16'}/> <a href="https://www.blender.org/" target="_blank"> Blender </a> - 3D Creation Suite </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/adobe.png" width={'16px'} height={'16'}/> <a href="https://www.adobe.com/" target="_blank"> Adobe </a> - I wish I could quit you </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/nts.png" width={'16px'} height={'16'}/> <a href="https://www.nts.live/" target="_blank"> NTS </a> - Pirate Radio </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/paletton.png" width={'16px'} height={'16'}/> <a href="https://paletton.com/" target="_blank"> Paletton </a> - Color Scheme Designer </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/anki.png" width={'16px'} height={'16'}/> <a href="https://apps.ankiweb.net/" target="_blank"> Anki </a> - Open-Source Flashcard Program </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/obsidian.png" width={'16px'} height={'16'}/> <a href="https://obsidian.md/" target="_blank"> Obsidian </a> - Note Taking Application</li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/to-do.png" width={'16px'} height={'16'}/> <a href="https://todo.microsoft.com/tasks/" target="_blank"> Microsoft To Do </a> - To Do list  </li>

                            </ul>
                    </div>

                    <div className="code-editor">
                        <h2 className="content-heading">Code Editor</h2>                    
                            <h3>Right now I'm using:</h3>

                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/vscode.png" width={'16px'} height={'16'}/> <a href="https://www.typescriptlang.org/" target="_blank"> Visual Studio Code </a> </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/jetbrains.png" width={'16px'} height={'16'}/> <a href="https://www.jetbrains.com/lp/mono/" target="_blank"> JetBrains Mono </a> - Font </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.vscolors.com/themes/45bfc9eb-5e03-487f-bffe-315fa6881d6a-66125dc6" target="_blank"> Material Theme Ocean High Contrast </a> - Theme </li>
                            </ul>
                        <hr />
                    </div>

                    <div className="Hardware">
                        <h2 className="content-heading">Hardware</h2>
                        <h3>Office Setup:</h3>

                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/aoc.pngg" width={'16px'} height={'16'}/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank"> AOC C24G1 </a> - Monitor </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/wacom.png" width={'16px'} height={'16'}/> <a href="https://www.wacom.com/en-us/products/pen-tablets/wacom-intuos" target="_blank"> Wacom Intuos </a> - Drawing Tablet </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.haworth.com/" target="_blank"> Haworth Improv S.E. </a> Office Chair </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/razer.png" width={'16px'} height={'16'}/> <a href="https://www.razer.com/gaming-mice/razer-deathadder-v2-pro" target="_blank"> Razer Deathadder V2 Pro </a> Mouse </li>

                            </ul>

                        <h3>Custom Built Workstation:</h3>

                            <ul className="about-list">
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank"> AMG Ryzen 5 2600 </a> - CPU </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank"> RDEON RX 580 </a> - GPU </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank"> G. SKill Ripjaws V DDR4 3200 </a> - RAM </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank"> Thermaltake Versa H22 </a> - Case </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/aorus.png" width={'16px'} height={'16'}/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank"> Aorus X470 </a> - Motherboard </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank"> Samsung 870 QVO </a> - SSD </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://aoc.com/us/gaming/products/monitors/c24g1" target="_blank"> Thermaltake ATX 80 </a> - PSU </li>


                            </ul>

                        <h3>Custom Built Keyboard:</h3>
                        

                            <ul className="about-list">
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.amazon.com/RK-ROYAL-KLUDGE-Mechanical-Connectable/dp/B08K8ZSB4C" target="_blank"> Royal Kludge 100 </a> - Base </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/akko.png" width={'16px'} height={'16'}/> <a href="https://en.akkogear.com/product/akko-cs-jelly-black-switch-45pcs/" target="_blank"> Akko Jelly Black </a> - Switches </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://ymdkey.com/products/137-mac-normcore-style-keycaps-dye-sub-xda-profile" target="_blank"> YMDK Mac Normcore </a> - Keycaps </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://a.co/d/7J9rAL1" target="_blank"> Foam Silencer Pad </a> - Sound Deadening Mod </li>

                            </ul>

                        <h3>Audio Gear:</h3>

                            <ul className="about-list">
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/vmoda.png" width={'16px'} height={'16'}/> <a href="https://www.amazon.com/RK-ROYAL-KLUDGE-Mechanical-Connectable/dp/B08K8ZSB4C" target="_blank"> V-Moda Crossfade V3 </a> - Headphones </li>
                                <li><img src="https://derailed-seed.s3.us-west-1.amazonaws.com/phillips.png" width={'16px'} height={'16'}/> <a href="https://www.amazon.com/RK-ROYAL-KLUDGE-Mechanical-Connectable/dp/B08K8ZSB4C" target="_blank"> Philips MC-100 </a> - Cassette / CD System </li>
                                <li><img src="https://img.icons8.com/?size=512&id=AYA3nLGNC4EE&format=png" width={'16px'} height={'16'}/> <a href="https://www.amazon.com/RK-ROYAL-KLUDGE-Mechanical-Connectable/dp/B08K8ZSB4C" target="_blank"> Audio Technia AT-PL120 </a> - Record Player </li>

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
        </div>
        
        </>
    )
}

export default About