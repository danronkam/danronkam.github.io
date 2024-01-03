import React, { useLayoutEffect } from "react";
import BlogIndexItem from "../BlogIndexItem";
import "./Blog.css"


function Blog() {

    const worksData = [
        {
            id: 1,
            title: "Derailed",
            type: "Project", 
            date: "2022",
            blurb: "Derailed is a full stack project inspired by 'Grailed,' where users can buy and sell used designer footwear. It features a sleek and intuitive user interface built with React and Next.js, providing a dynamic experience. The Ruby on Rails backend ensures efficient data management while working with secruely with AWS S3 for scalable file storage. Users can create listings, engage in discussions through comments, and enjoy secure transactions. Derailed combines modern web technologies with a reliable development framework, offering a seamless platform for buying and selling unique designer footwear.",
            link: "/project/:derailed",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_highlights_gif.gif"

        },
        {
            id: 2,
            title: "Heard",
            type: "Project", 
            date: "2022",
            blurb: "Heard is a full stack MERN project that introduces an intriguing web application where users can share anonymous confessionals that are securely stored in a database and sent to another user for a limited viewing period before being permanently deleted. Additionally, users can create anonymous chat rooms to engage in private conversations. Developed within a week, Heard harnesses the power of MongoDB for efficient data storage, Express.js for building a robust backend, React for creating an interactive user interface, and Next.js for server-side rendering. This combination of technologies delivers a seamless and secure platform for anonymous confessions and private chats.",
            link: "/project/:heard",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/heard_highlights.gif"

        },
        {
            id: 3,
            title: "DKFM",
            type: "Project", 
            date: "2022",
            blurb: "DKFM is a captivating web application that seamlessly blends music and visuals to create an immersive experience tailored to the user's mood. Serving as both a music player and visualizer, DKFM curates a playlist that dynamically matches the ambiance desired by the user. Crafted using JavaScript, HTML, and CSS, this application provides a seamless and intuitive interface for users to explore an array of audio-visual combinations, enhancing their listening experience with synchronized visuals that perfectly complement the music.",
            link: "/project/:dkfm",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/heard_highlights.mp4"
        },
    ];

    const ecomData = 
        {
            id: 1,
            title: "Ecommerce Development",
            type: "Current Work", 
            date: "2023 - Now",
            blurb: "Derailed is a full stack project inspired by 'Grailed,' where users can buy and sell used designer footwear. It features a sleek and intuitive user interface built with React and Next.js, providing a dynamic experience. The Ruby on Rails backend ensures efficient data management while working with secruely with AWS S3 for scalable file storage. Users can create listings, engage in discussions through comments, and enjoy secure transactions. Derailed combines modern web technologies with a reliable development framework, offering a seamless platform for buying and selling unique designer footwear.",
            link: "/project/:derailed",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_highlights_gif.gif"
            
        }



    useLayoutEffect(() => {
        window.scrollTo(0,0)
    });

    return(
        <>
        <div className="content-container" >
            <div className="toc">
            </div>

            <h1 className="content-title works-heading"> Ecommerce Development </h1>
            <hr />

            <div className="ecomm-post container">
                <BlogIndexItem post={ecomData} />
            </div>

            <h1 className="content-title works-heading"> Selected Works </h1>
            <hr />

            <div className="post-container">
                {worksData.map(work => {
                    return <BlogIndexItem key={work.id} post={work} />
                })}

            </div>          
        </div>

        </>
    )
}

export default Blog