import React from "react";
import "./BlogIndexItem.css"
import { useHistory } from "react-router-dom";


const BlogIndexItem = (post) => {
    const history = useHistory();
    let title;
    let description;
    let date;
    let link;
    let img;

    if(post) {
        title = post.post.title;
        description = post.post.blurb;
        date = post.post.date;
        link = post.post.link;
        img = post.post.img
    }

    const BackgroundImage = styled.div`
        background-image: url(${img});
    `;
    

    return(
        <>
            <div className="blog-item-container highlightHover" onClick={() => history.push(`${link}`)} style={BackgroundImage}>
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