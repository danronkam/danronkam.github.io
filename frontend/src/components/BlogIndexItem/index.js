import React from "react";
import "./BlogIndexItem.css"
import { Link, useHistory } from "react-router-dom";


const BlogIndexItem = (post) => {
    const history = useHistory();
    let title;
    let description;
    let date;
    let coverSrc;
    let link;

    if(post) {
        title = post.post.title;
        description = post.post.blurb;
        date = post.post.date;
        // coverSrc = post.post.coverPhoto.url
        link = post.post.link;
    }
    

    return(
        <>
            <div className="blog-item-container highlightHover" onClick={() => history.push(`${link}`)}>
                <div className="highlight-head">
                    <p> <b className="type"> Project </b> <b className="date">{date}</b></p>
                    <h1>{title}</h1>
                </div>
                <div className="highlight-body" >
                    <p>{description}</p>
                </div>
                <div className="highlight-link" >
                    <p className="highlight-link">Read More</p>
                </div>
                <br />
                
            </div>
        
        </>
    )
}

export default BlogIndexItem  