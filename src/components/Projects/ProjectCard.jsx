function ProjectCard(props) {
    return (
        <article className="card">
            <img src={props.url} alt="" class="thumbnail"/>
            <span>props.title</span>
        </article>
    )
}