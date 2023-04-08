import MediaButton from "./MediaButton"

function Media(props) {
    return (
        <section id="media" className="gray-background">
            <h2 className="title text-centered bold xiketic">Find me!</h2>
            <div className="mediaButtonsContainer">
                <MediaButton media="linkedin" />
                <MediaButton media="github" />
            </div>
        </section>
    )
}

export default Media