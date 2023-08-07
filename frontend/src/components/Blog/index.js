import React, { useLayoutEffect } from "react";
import BlogIndexItem from "../BlogIndexItem";
import "./Blog.css"


function Blog({blogPosts}) {
    console.log('this blog is a type', typeof blogPosts)

    if(!blogPosts) {
        blogPosts = [];
    }

    console.log(typeof blogPosts)


    useLayoutEffect(() => {
        window.scrollTo(0,0)
    });

    return(
        <>
        <div className="content-container" id="coming-soon">
                <div class="container">
                    <div class="neon">Coming </div>
                    <div class="flux">Soon </div>
                </div>

            <p>In the mean time check out my <a href="https://designdk.substack.com/" target="_blank" rel="noreferrer">substack</a>, or email to get my rants directly</p>
            {/* <div className="toc">
            </div>

            <div className="post-containter">
                {blogPosts.map(post => {
                    return <BlogIndexItem key={post.id} post={post} />
                })}

            </div> */}
  
        </div>

        </>
    )
}

export default Blog