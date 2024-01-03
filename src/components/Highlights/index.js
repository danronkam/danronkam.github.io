import React from "react";
import HighlightsItem from "../HighlightsItem";
import "./Highlights.css"


const Highlights = () => {
    const highlightsData = [
        {
            id: 3,
            title: "Ecommerce Developer",
            type: "Work", 
            date: "2023",
            blurb: "Elevate your business online with custom tailored solutions to fit your needs. With proven results across platofrms, Cargo, Shopify, WooCommerce, check out some of my previous work and see how I can help you grow online",
            link: "/ecom",

        },
        {
            id: 1,
            title: "Derailed",
            type: "Project", 
            date: "2022",
            blurb: "Derailed is a full stack project inspired by 'Grailed,' where users can buy and sell used designer footwear. It features a sleek and intuitive user interface built with React and Next.js, providing a dynamic experience. The Ruby on Rails backend ensures efficient data management while working with secruely with AWS S3 for scalable file storage. Users can create listings, engage in discussions through comments, and enjoy secure transactions. Derailed combines modern web technologies with a reliable development framework, offering a seamless platform for buying and selling unique designer footwear.",
            link: "/project/:derailed",
        },
        {
            id: 2,
            title: "Heard",
            type: "Project", 
            date: "2022",
            blurb: "Heard is a full stack MERN project that introduces an intriguing web application where users can share anonymous confessionals that are securely stored in a database and sent to another user for a limited viewing period before being permanently deleted. Additionally, users can create anonymous chat rooms to engage in private conversations. Developed within a week, Heard harnesses the power of MongoDB for efficient data storage, Express.js for building a robust backend, React for creating an interactive user interface, and Next.js for server-side rendering. This combination of technologies delivers a seamless and secure platform for anonymous confessions and private chats.",
            link: "/project/:heard",

        }
    ]



    return(
        <>
        <div className="highlights-container" >
            { highlightsData.map(highlightData => {
                return <HighlightsItem key={highlightData.id} highlight={highlightData} />
            })}
            <a href="https://designdk.substack.com/p/02-the-first-live-streamed-runways" target="_blank" id="substack-highlight" rel="noreferrer">

            <div className="highlight-container" >
                <div className="highlight-head">
                    <p> <b className="type"> Article </b> <b className="date">  2023 </b></p>
                    <h1 className="highlight-head">The First Livestreamed Runway</h1>
                </div>
                <div className="highlight-body">
                    <p> 
                        When 2020 brought all runway shows online, content creators were quick to call Helmut Lang's 1998 show the first live streamed runway.
                        Yet Lang himself does not call it a livestream, but more of a prototype. So after him, 
                        who had the first live streamed runway?
                    </p>
                </div>
                <div className="highlight-link">
                    <p href="https://designdk.substack.com/p/02-the-first-live-streamed-runways"  target="_blank" className="highlight-link">Read more</p>
                </div>

            </div>   
            </a>   
        

        </div>

        </>
    )
}

export default Highlights