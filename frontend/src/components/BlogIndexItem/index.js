import React from "react";
import "./BlogIndexItem.css"
import { Link } from "react-router-dom";


const BlogIndexItem = (post) => {
    console.log(post.post.title);
    let title;
    let description;
    let id;
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
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{date}</p>
            <p>{coverSrc}</p>
            <p>{slug}</p>
            <img src={`${coverSrc}`}></img>
            <Link 
                to={{
                    pathname: `/blog/:${slug}`, 
                    state: {blog: post}
                }}
            >Read More</Link>
        </div>
        
        </>
    )
}

export default BlogIndexItem  