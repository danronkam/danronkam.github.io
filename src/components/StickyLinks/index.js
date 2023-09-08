
import "./StickyLinks.css"

const StickyLinks = (linkData) => {
    const links = linkData.linkData;

    return(
        <>
            <div className="sticky-container">
                <div className="sticky-top">
                    <a href={`${links.code}`} target="_blank" rel="noreferrer" className="button">Github</a>
                    <a href={`${links.live}`} target="_blank" rel="noreferrer" className="button">Live</a>
                    <a href="mailto:danronkam@gmail.com" className="button" id="email-button" target="_blank" rel="noreferrer">Write to me</a>

                </div>
            </div>
        
        </>
    )
}

export default StickyLinks