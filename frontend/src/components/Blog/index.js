import React from "react";
import BlogIndexItem from "../BlogIndexItem";
import "./Blog.css"


function Blog({blogPosts}) {

    if(!blogPosts) {
        blogPosts = [];
    }

    return(
        <>
        <div className="blog-index-container">
            <div className="toc">
            
            </div>

            <div className="post-containter">
                {blogPosts.map(post => {
                    return <BlogIndexItem key={post.id} post={post} />
                })}

            </div>

        </div>

        </>
    )
}

export default Blog