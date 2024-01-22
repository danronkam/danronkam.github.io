import "./services.css"
import { useLayoutEffect } from "react";

const Services = () => {

    const scrollers = document.querySelectorAll(".scroller");

    console.log(scrollers)

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });



    return(
        <>
            <div className="content-container"  id="services-container">
                <div className="content-left">
                    <h1 className="content-title">Web Development Services </h1>
                    <p className="content-description">
                        Brand consultancy and web development working across scale, strategy, creative direction and technical research. 
                    </p>
                    <div className="tag-wrapper">
                        <div className="content-tags flex-child">
                            <div className="label">Type</div>
                            <div className="tags">For Hire</div>
                        </div>
                        <div className="content-tags flex-child">
                            <div className="label">Updated</div>
                            <div className="tags">Jan 2024</div>
                        </div>
                    </div>

                    <hr />
                    
                    <div className="content-body">
                        <div className="introduction">
                            <h2 className="content-heading">About</h2>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, ex non ultrices luctus, lorem nunc consectetur magna, ac rutrum mi sapien ut orci. Etiam purus tellus, consectetur sed orci eu, consectetur accumsan mauris. Donec suscipit quis purus vel pulvinar. Donec consectetur arcu id orci placerat, non blandit ipsum posuere. Nunc in est pretium, tempor dui venenatis, vehicula nisl. Suspendisse in tortor massa. Donec quis ultricies ex. Nunc tempus, purus non mollis porta, ante urna vulputate massa, a consectetur erat diam vel tellus. Pellentesque sit amet leo at eros vulputate consequat pellentesque vitae eros. Maecenas ac dolor sem. Nunc vel tempus urna, et facilisis massa. Maecenas tempor augue at turpis mollis sagittis. Cras vel arcu luctus, maximus dui tempor, efficitur ex. Integer in mollis ligula.
                            </p>
                            < br />
                            <h3>Let's talk, danronkam@gmail.com</h3>
                        </div>

                            <h2 className="content-heading">Services</h2>
                            <ul className="about-list">
                                <li className="service">
                                    Full Stack Web Development  
                                </li>
                                <li className="service">
                                    Tech Consulting
                                </li>
                                <li className="service">
                                    Brand Strategy 
                                </li>
                                <li className="service">
                                    Data Analysis
                                </li>
                                <li className="service">
                                    Multichannel Selling
                                </li>
                                <li className="service">
                                    Brand Strategy 
                                </li>
                                <li className="service">
                                    Product Development 
                                </li>
                                <li className="service">
                                    Copywriting 
                                </li>
                            </ul>
                    </div>
                    <h2 className="content-heading"> In Media</h2>
                    <div className="services-press-container">
                        <p>Advertisers must adapt to the demands of the consumer</p>
                    
                    </div>
                    <h2 className="content-heading">Clients</h2>
                    <div className="scroller" data-direction="right" data-speed="slow">
                        <div className="scroller_inner">
                            <img className="scroller-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/KUIVA_logo.png" alt=""/>
                            <img className="scroller-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/multi.projects+(2).png" alt=""/>
                            <img className="scroller-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/BH.png" alt=""/>
                            <img className="scroller-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/BML.png" alt=""/>
                            <img className="scroller-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/cex.png" alt=""/>
                            <img className="scroller-img" src="https://derailed-seed.s3.us-west-1.amazonaws.com/ml.png" alt=""/>                        
                        </div>
                    </div>

                    <div className="services-contact-container">

                    </div>
                    



                </div>`

            </div>
                
        </>
    )
}

export default Services