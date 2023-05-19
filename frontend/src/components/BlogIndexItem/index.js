import React from "react";
import "./BlogIndexItem.css"
import { Link } from "react-router-dom";


const BlogIndexItem = (post) => {
    let title;
    let description;
    let date;
    let coverSrc;
    let slug;

    if(post) {
        title = post.post.title;
        description = post.post.description;
        date = post.post.date;
        coverSrc = post.post.coverPhoto.url
        slug = post.post.slug
    }
    

    return(
        <>
        <div className="blog-item-container">
            <h1 className="blog-title">{title} <b>{date}</b></h1>             
            <p className="blog-description">{description}</p>
            <img src={`${coverSrc}`} alt=""></img>
            <br />
            <Link 
                to={{
                    pathname: `/blog/:${slug}`, 
                    state: {blog: post}
                }}
                className="blog-link"
            >Read More</Link>
        </div>
        
        </>
    )
}

export default BlogIndexItem  