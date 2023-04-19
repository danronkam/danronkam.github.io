import React from "react";

const BlogIndexItem = (post) => {
    console.log(post.post.title);
    let title;
    let description;
    let id;
    let date;
    let coverSrc;

    if(post) {
        title = post.post.title;
        description = post.post.description;
        date = post.post.date;
        coverSrc = post.post.coverPhoto.url

    }
    

    return(
        <>
        <div className="blog-item-container">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        
        </>
    )
}

export default BlogIndexItem