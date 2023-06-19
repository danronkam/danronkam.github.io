import { useParams } from "react-router-dom/cjs/react-router-dom.min"


const ProjectShow = (projects) => {
    console.log(projects)
    const {title} = useParams();

    console.log(title)

    return(
        <>
        
        hello
        
        </>
    )
}

export default ProjectShow