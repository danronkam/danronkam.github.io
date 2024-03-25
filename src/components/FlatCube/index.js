
import "./FlatCube.css"

const FlatCube = () => {

    let flatCube = document.querySelector(".flatCube");
    console.log(flatCube)

    // window.addEventListener("scroll", () => {
    //     var top = window.scrollY / 10;
    //     flatCube.style.transform = 'rotate3d(0.5, 0.5, 0.5, ' + top + 'deg)';
    // })

    return(
        <>
            <div className="flatCube-container">
                <div className="flatCube">
                    
                </div>
            </div> 
        
        </>
    )
}

export default FlatCube