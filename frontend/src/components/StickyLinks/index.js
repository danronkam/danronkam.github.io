
const StickyLinks = (linkData) => {
    console.log(linkData);
    const links = linkData.linkData;

    return(
        <>
            <div className="sticky-container">
                <div className="sticky-top">
                    <a href={`${links.code}`} target="_blank" rel="noreferrer">Github</a>
                    <a href={`${links.live}`} target="_blank" rel="noreferrer">Live</a>
                </div>
                <div className="sticky-bottom">
                    <a>Contact</a>
                </div>
            </div>
        
        </>
    )
}

export default StickyLinks