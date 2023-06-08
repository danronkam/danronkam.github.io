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
            link: "/project/:derailed",
        },
        {
            id: 2,
            title: "Heard",
            type: "Project", 
            date: "2022",
            blurb: "Grrailed",
            link: "/project/:heard",

        },
        {
            id: 3,
            title: "DKFM",
            type: "Project", 
            date: "2022",
            blurb: "G]railed",
            link: "/project/:dkfm",

        },
        {
            id: 4,
            title: "BLOGPOST",
            type: "Article", 
            date: "2023",
            blurb: "I think im mre interesting than i am",
            link: "/blog",

        }
    ]



    return(
        <>
        <div className="highlights-container">
            { highlightsData.map(highlightData => {
                return <HighlightsItem key={highlightData.id} highlight={highlightData} />
            })}
        

        </div>

        </>
    )
}

export default Highlights