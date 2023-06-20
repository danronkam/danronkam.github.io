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
    })

    return(
        <>
        <div className="content-container" id="coming-soon">
            <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/coming+soon.gif" alt="coming soon gif" /> 


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