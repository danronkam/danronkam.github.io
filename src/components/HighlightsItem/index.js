import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./HighlightsItem.css"

const HighlightsItem = (highlight) => {
    const history = useHistory()

    const title = highlight.highlight.title;
    const type = highlight.highlight.type;
    const date = highlight.highlight.date;
    const blurb = highlight.highlight.blurb;
    const link = highlight.highlight.link;

    return (
        <>
            <div className="highlight-container highlightHover" onClick={() => history.push(`${link}`)}>
                <div className="highlight-head">
                    <p> <b className="type"> {type} </b> <b className="date">   {date} </b></p>
                    <h1 className="highlight-head">{title}</h1>
                </div>
                <div className="highlight-body">
                    <p>{blurb} </p>
                </div>
                <div className="highlight-link">
                    <Link to={`${link}`} className="highlight-link">Read more</Link>
                </div>

            </div>        
        </>
    )
}

export default HighlightsItem