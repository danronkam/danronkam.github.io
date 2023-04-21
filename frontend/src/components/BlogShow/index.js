import React from "react";
import { useLocation, useParams } from "react-router-dom";

const BlogShow = (REKT) => {
    const location = useLocation();
    const post = location.state?.post;
    console.log(post)
    

    return (
        <>
        <h1>IAMA BLOG SHOW</h1>
        </>
    )
}

export default BlogShow