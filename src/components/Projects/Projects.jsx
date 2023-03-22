import ProjectCard from "./ProjectCard"

const projectList = [
    {
        url: "https://i.imgur.com/yOsWtBf.png",
        title: "Markdown Previewer",
        redirect: "https://codepen.io/newtonhead/pen/QWOXeLj"
    },
    {
        url: "https://i.imgur.com/fjRh9KE.png",
        title: "Calculator",
        redirect: "https://codepen.io/newtonhead/pen/KKZoaGE"
    },
    {
        url: "https://i.imgur.com/Sb3dE1k.png",
        title: "Drum Machine",
        redirect: "https://codepen.io/newtonhead/pen/jOYBdKV"
    }
]

function Projects() {
    return (
        <section id="projects" className="gray-background">
            <h2 class="title text-centered oxford-blue bold">Check some of my projects at codepen!</h2>
            {projectList.map((project, index) => {
                return (
                    <ProjectCard url={project.url} title={project.title} redirect={project.redirect}/>
                )
            })}
        </section>
    )
}

export default Projects