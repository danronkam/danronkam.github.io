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
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis turpis nec elementum malesuada. Curabitur a sapien non dolor varius luctus. Sed commodo commodo tellus, eget molestie odio congue eu. Praesent tristique ipsum a arcu elementum, elementum feugiat mauris hendrerit. Suspendisse quis purus at eros ultricies ornare. Suspendisse eu varius sem. Suspendisse rhoncus fringilla lacus non commodo. Suspendisse hendrerit ipsum sit amet velit porttitor imperdiet. Suspendisse condimentum, erat a gravida lacinia, velit eros commodo purus, eget efficitur lectus diam vitae est. Etiam commodo sapien ac hendrerit sodales. Integer in lorem elit.",
            link: "/project/:derailed",
        },
        {
            id: 2,
            title: "Heard",
            type: "Project", 
            date: "2022",
            blurb: "Suspendisse et nulla sed mi blandit molestie. Ut luctus nunc at est hendrerit mollis. Nullam sed semper purus, mattis mollis orci. Etiam ac pretium urna. Vestibulum et vestibulum leo, id condimentum orci. Etiam sagittis tortor sed erat euismod sagittis. Etiam mattis accumsan tristique.",
            link: "/project/:heard",

        },
        {
            id: 3,
            title: "DKFM",
            type: "Project", 
            date: "2022",
            blurb: "G]Phasellus fermentum diam non velit rutrum suscipit. Mauris congue elementum odio non cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur elit mi, nec scelerisque nisl faucibus id. Nulla eget lorem cursus, fermentum ligula ac, elementum justo. Phasellus tempor ut neque vel posuere. Phasellus facilisis augue augue, porttitor viverra augue scelerisque sit amet.",
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