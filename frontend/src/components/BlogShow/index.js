import React from "react";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./BlogShow.css"

const BlogShow = () => {
    // const {slug} = useParams(slug);
    // console.log(slug)
    const location = useLocation();
    const blog = location.state?.blog;
    console.log(blog)
    const headings = blog.post.headings;
    const sections = blog.post.sections;
    const date = blog.post.publishedAt;
    const type = blog.post.type;

    let counter = 0;

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <>
        <div className="content-container">
            <div className="content-left">
                <div className="blogpost-header">
                    <h1 className="blogpost-title">{blog.post.title}</h1>
                    <p className="blogpost-description">{blog.post.description}</p>
                    <div className="blogpost-tags">
                        <div className="label">Type</div>
                        <div>Article</div>
                    </div>
                    <div className="blogpost-tags">
                        <div className="label">Published</div>
                        <div>{date}</div>
                    </div>
                </div>

                <hr />
                <div className="blogpost-body">
                    {headings.map(heading => {
                        let body = sections[counter]
                        console.log(body.text)
                        counter++


                        return(
                            <>
                            <div className="subheading">
                                <h2>{heading}</h2>
                            </div>

                            <div className="content">
                                <p>{body.text}</p>
                            </div>
                                                

                        </>)
                    })}
                </div>

            </div>
            <div className="blogpost-right">
            
            </div>   

        </div>
        </>
    )
}

export default BlogShow