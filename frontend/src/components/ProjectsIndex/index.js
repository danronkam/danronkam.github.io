import ProjectIndexItem from "../ProjectIndexItem";

const ProjectsIndex = () => {

    const projects  = [ 
        {
            id: 1,
            title: "Derailed",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_pc_gif.gif",
            alt: "derailed gif",
            tags: ["Rails", "React", "Redux", "Ruby", "JavaScript", "HTML", "AWS", "CSS"],
            bio: "A fullstack Grailed clone where users can search through filtered listings, review other users profiles, create their own listings, and review products",
            live: "https://dk-derailed.herokuapp.com/",
            code: "https://github.com/danronkam/derailed/"
        },
        {
            id: 2,
            title: "DK-FM",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/dkfm_pc_gif.gif",
            alt: "dk-fm gif",
            tags: ["JavaScript", "HTML", "AWS", "CSS"],
            bio: "A Javascript music player that selects a list of music and accompanying visuals based on the users mood and preferences",
            live: "https://doafavorfor.me/DKFM247/",
            code: "https://github.com/danronkam/DKFM247"
        },
        {
            id: 3,
            title: "Heard",
            img: "https://derailed-seed.s3.us-west-1.amazonaws.com/heard_pc_gif.gif",
            alt: "heard gif",
            tags: ["Rails", "React", "Redux", "Ruby", "JavaScript", "HTML", "AWS", "CSS"],
            bio: "A MERN stack app where users can share their secrets anonymously, hear other confessions, and chat with other people in similar situations",
            live: "https://heard--app.herokuapp.com/home",
            code: "https://github.com/danronkam/Heard"
        },
    ]



    return(
        <>
            <div className="projectsIndex-container">
                <h1 className="selected-works-title">Selected Projects</h1>
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