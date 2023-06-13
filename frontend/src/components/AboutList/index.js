


const AboutList = (list) =>{
    let image = list.img;
    let words = list.text;



    return (
        <>
            <li>
                <img src={image}></img>
                <p>{words}</p>
            </li>
        
        </>
    )
}