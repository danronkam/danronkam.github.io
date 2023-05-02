import React from "react";
import { useLocation, useParams } from "react-router-dom";

const BlogShow = () => {
    const location = useLocation();
    const blog = location.state?.blog;
    const headings = blog.post.headings;
    const sections = blog.post.sections;
    let counter = 0;


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
                        {counter++}


                        return(
                            <>
                            <h2>{heading}</h2>
                            <p>{body.text}</p>
                    

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