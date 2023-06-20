const ProjectShow = (projectData) => {
    console.log(projectData)
    const project = projectData.projectData
    const tech = project.tech
    const intro = project.intro
    const planning = project.planning
    const features = project.features
    console.log(typeof project.tech)
    const title = projectData.projectData.title;
    console.log(title, 'yee')

    return (
        <>
        <div className="content-container">
            <div className="content-left">

                <h1 className="content-title">{project.heading}</h1>
                <p className="content-description">
                    {tech.map(techData => {
                        let txt = techData.text
                        let img= techData.img
                        console.log(txt)
                        return <>
                          <img src={img} width={'16px'} height={'16px'}/> {txt} 
                        </>      
                    })}
                </p>
                <div className="tag-wrapper">
                    <div className="content-tags flex-child">
                            <div className="label">Type</div>
                            <div className="tags">{project.type}</div>
                    </div>
                    <div className="content-tags flex-child">
                            <div className="label">Created</div>
                            <div className="tags">November 2022</div>
                    </div>
                </div>

                <hr/>

                <div className="content-body">

                    <div className="introduction">
                        <h2 className="content-heading">Introduction</h2>
                        <p>{intro.body}</p>
                        <img src={`${intro.img}`} />
                    </div>

                    < hr />

                    <div className="planning" >
                        <h2 className="content-heading">Planning</h2>
                        <p>{planning.text}</p>
                    </div>

                    <hr />

                    <div className="features">
                        <h2 className="content-heading">Features</h2>
                        {features.map(feature => {
                            let title = feature.title;
                            let text = feature.text;
                            return <>
                                <h3 className="feature-title">{title}</h3>
                                <p className="feature-text">{text}</p>
                            </>
                        })}
                    </div>


                </div>


            </div>
        </div>
        </>
    )
}

export default ProjectShow