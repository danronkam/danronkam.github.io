import React from "react";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogShow = () => {
    // const {slug} = useParams(slug);
    // console.log(slug)
    const location = useLocation();
    const blog = location.state?.blog;
    const headings = blog.post.headings;
    const sections = blog.post.sections;

    let counter = 0;

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <>
        <div className="blogpost-container">
            <div className="blogpost-left">
                <div className="blogpost-header">
                    <h1>{blog.post.title}</h1>
                    <p>{blog.post.description}</p>
                </div>
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