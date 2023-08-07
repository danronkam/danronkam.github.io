import React from "react";
import "./BlogIndexItem.css"
import { Link } from "react-router-dom";


const BlogIndexItem = (post) => {
    let title;
    let description;
    let date;
    let coverSrc;
    let link;

    if(post) {
        title = post.post.title;
        description = post.post.blurb;
        date = post.post.date;
        // coverSrc = post.post.coverPhoto.url
        link = post.post.link;
    }
    

    return(
        <>
        <div className="blog-item-container">
            <h1 className="blog-title">{title} <b>{date}</b></h1>             
            <p className="blog-description">{description}</p>
            {/* <img src={`${coverSrc}`} alt=""></img> */}
            <br />
            <Link 
                to={{
                    pathname: `${link}`, 
                }}
                className="blog-link"
            >Read More</Link>
        </div>
        
        </>
    )
}

export default BlogIndexItem  