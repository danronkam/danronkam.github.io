import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import ProjectShow from "../ProjectShow";


function ProjectPage({projectData})  {
    const {title} = useParams();


    return(
        <>
            <div> 
                {
                    projectData.map(project => {
                        const projectTitle = project.title;
                        if(projectTitle === title)
                            return <ProjectShow key={project.id} projectData={project} />
               
                    })
                }
            </div>
        
        </>
    )
}

export default ProjectPage