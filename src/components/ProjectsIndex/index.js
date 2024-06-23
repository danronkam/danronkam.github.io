import ProjectIndexItem from "../ProjectIndexItem";
import React from 'react'


const ProjectsIndex = () => {

    const projects  = [ 
        {
            id: 1,
            title: "Derailed",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_pc_gif.gif",
            alt: "derailed gif",
            tags: ["Rails", "React", "Redux", "Ruby", "JavaScript", "HTML", "AWS", "CSS"],
            bio: "A fullstack Grailed clone where users can search through filtered listings, review other users profiles, create their own listings, and review products",
            links: {
                live: "https://dk-derailed.herokuapp.com/",
                code: "https://github.com/danronkam/derailed/"
            }
        },
        {
            id: 2,
            title: "DK-FM",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/dkfm_pc_gif.gif",
            alt: "dk-fm gif",
            tags: ["JavaScript", "HTML", "AWS", "CSS"],
            bio: "A Javascript music player that selects a list of music and accompanying visuals based on the users mood and preferences",
            links: {
                live: "https://doafavorfor.me/DKFM247/",
                code: "https://github.com/danronkam/DKFM247"
            }
        },
        {
            id: 3,
            title: "Heard",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/heard_pc_gif.gif",
            alt: "heard gif",
            tags: ["Rails", "React", "Redux", "Ruby", "JavaScript", "HTML", "AWS", "CSS"],
            bio: "A MERN stack app where users can share their secrets anonymously, hear other confessions, and chat with other people in similar situations",
            links: {
                live: "https://heard--app.herokuapp.com/home",
                code: "https://github.com/danronkam/Heard"
            }
        },
        {
            id: 4,
            title: "multi. projects",
            img: "https://freight.cargo.site/w/100/i/ea24553e52bd9a7e1cad437963220fdf009f543574918ba4825d6cbf81ab6701/multiPJFace.gif",
            alt: "multigif",
            tags: ["Javascript", "CSS", "HTML", "Consulting", "E-Commerce", "Project Management", "Training Hours", "CSS"],
            bio: "An e-commerce platform for a emerging arts book fair based out of Honolulu, Hawaii",
            links: {
                live: "multifair.cargo.site",
                code: "https://github.com/danronkam/Heard"
            }
        },
    ]



    return(
        <>
            <div className="content-container">
                <div className="selected-works-container">
                    {projects.map(project => {
                            return <ProjectIndexItem key={project.id} projectData={project} />
                    })}
                    
                </div>
            </div>
            
        
        </>
    )
}

export default ProjectsIndex