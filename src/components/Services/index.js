import "./services.css"
import ClientSlider from "./ClientSlider";
import { useLayoutEffect } from "react";

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
                    <div className="lets-talk">
                        let's talk
                    </div>
                </div>

                <div className="service-grid">
                    <div className="service-item">

                    </div>

                    <div className="service-item">

                    </div>

                    <div className="service-item">
                        <div className="service-left">

                        </div>
                        <div className="service-right">
                            
                        </div>
                    </div>
                    
                </div>
               
            </div>
                
        </>
    )
}

export default Services