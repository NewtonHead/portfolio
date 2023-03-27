import MediaButton from "./MediaButton"

function Media(props) {
    return (
        <section id="media" className="xiketic-background">
            <h2 className="title text-centered bold almond">Find me!</h2>
            <div className="mediaButtonsContainer">
                <MediaButton media="linkedin" />
                <MediaButton media="github" />
            </div>
        </section>
    )
}

export default Media