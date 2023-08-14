
import "./StickyLinks.css"

const StickyLinks = (linkData) => {
    console.log(linkData);
    const links = linkData.linkData;

    return(
        <>
            <div className="sticky-container">
                <div className="sticky-top">
                    <a href={`${links.code}`} target="_blank" rel="noreferrer" className="button">Github</a>
                    <a href={`${links.live}`} target="_blank" rel="noreferrer" className="button">Live</a>
                    <a href="danronkam@gmail.com" className="button" id="email-button">Write to me</a>

                </div>
            </div>
        
        </>
    )
}

export default StickyLinks