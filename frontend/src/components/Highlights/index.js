import React from "react";
import HighlightsItem from "../HighlightsItem";
import "./Highlights.css"


const Highlights = () => {
    const highlightsData = [
        {
            id: 1,
            title: "Derailed",
            type: "Project", 
            date: "2022",
            blurb: "G]railed",
            link: "",
        },
        {
            id: 2,
            title: "Heard",
            type: "Project", 
            date: "2022",
            blurb: "Grrailed",
            link: "",

        },
        {
            id: 3,
            title: "DKFM",
            type: "Project", 
            date: "2022",
            blurb: "G]railed",
            link: "",

        },
        {
            id: 4,
            title: "BLOGPOST",
            type: "Article", 
            date: "2023",
            blurb: "I think im mre interesting than i am",
            link: "",

        }
    ]



    return(
        <>
        <div className="highlights-container">
            { highlightsData.map(highlight => {
                return <HighlightsItem key={highlight.id} highlight={highlight} />
            })}
        

        </div>

        </>
    )
}

export default Highlights