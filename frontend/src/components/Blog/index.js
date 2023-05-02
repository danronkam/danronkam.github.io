import React from "react";
import BlogIndexItem from "../BlogIndexItem";


function Blog({blogPosts}) {
    return(
        <>
        <div className="post">
            {blogPosts.map(post => {
               return <BlogIndexItem key={post.id} post={post} />
            })}

        </div>

        </>
    )
}

export default Blog