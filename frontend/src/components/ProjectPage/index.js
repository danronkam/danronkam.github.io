import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import ProjectShow from "../ProjectShow";


function ProjectPage({projectData})  {
    // console.log(projectData)
    const {title} = useParams();

    // function test(projectData) {
    //     for(let project of projectData) {
    //         console.log(project)
    //     }
    // }

    // test()

    // if(!projects) {
    //     projects = [];
    // }

    // const getProject = (projects) => {
    //     for(let project of projects) {
    //         console.log(getProject)
    //     }
    // }

    // getProject()

    // console.log(title)

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