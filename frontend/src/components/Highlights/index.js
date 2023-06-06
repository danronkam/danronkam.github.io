import React from "react";
import HighlightsItem from "../HighlightsItem";


const Highlights = () => {
    const highlightsData = [
        {
            id: 1,
            tite: "Derailed",
            type: "Project", 
            date: "2022",
            blurb: "G]railed",
            link: "",
        },
        {
            id: 2,
            tite: "Heard",
            type: "Project", 
            date: "2022",
            blurb: "Grrailed",
            link: "",

        },
        {
            id: 3,
            tite: "DKFM",
            type: "Project", 
            date: "2022",
            blurb: "G]railed",
            link: "",

        },
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