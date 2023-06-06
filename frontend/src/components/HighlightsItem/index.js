import React from "react";
import { Link } from "react-router-dom";


const HighlightsItem = (highlight) => {
    console.log(highlight)

    const title = highlight.highlight.title;
    const type = highlight.highlight.type;
    const date = highlight.highlight.date;
    const blurb = highlight.highlight.  
    blurb;


    return (
        <>
        <div className="highlight-container">
            <div className="highlight-head">
                <p>{type} {date}</p>
                <h1>{title}</h1>
            </div>
            <div className="highlight-body">
                <p>{blurb} </p>
            </div>
            <div className="highlight-link">
                <Link>Read more</Link>
            </div>

        </div>        
        </>
    )
}

export default HighlightsItem