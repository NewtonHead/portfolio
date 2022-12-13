const projectList = [
    {
        url: "https://i.imgur.com/yOsWtBf.png",
        title: "Markdown Previewer"
    },
    {
        url: "https://i.imgur.com/fjRh9KE.png",
        title: "Calculator"
    },
    {
        url: "https://i.imgur.com/Sb3dE1k.png",
        title: "Drum Machine"
    }
]

function Projects() {
    return (
        <section id="projects">
            <h2 class="title">Check some of my projects at codepen!</h2>
            {projectList.map((project, index) => {
                return (
                    <article className="card">
                        <img src={project.url} key={index} alt="" srcset="" className="thumbnail all-centered"/>
                        <span className="project-button all-centered oxford-blue bold noselect">{project.title}</span>
                    </article>
                )
            })}
        </section>
    )
}

export default Projects