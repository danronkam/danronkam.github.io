import React from "react";
import BlogIndexItem from "../BlogIndexItem";
import "./Blog.css"


function Blog({blogPosts}) {
    return(
        <>
        <div className="blog-index-container">

            <div className="post">
                {blogPosts.map(post => {
                return <BlogIndexItem key={post.id} post={post} />
                })}

            </div>

        </div>

        </>
    )
}

export default Blog