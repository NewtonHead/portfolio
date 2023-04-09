function Welcome(props) {

  return (
    <section id="welcome" className="noselect almond flex-centered xiketic-background">
      <div className="welcome-card absolute text-centered">
            <div className="text-centered flex-centered">
                <p id="welcome-text">
                  {props.paragraph}
                </p>
            </div>
            <button id="workButton" className="fadeAnimation ghostButton almond xiketic-background">{props.buttonText}</button>
        </div>
    </section>
  )
}

export default Welcome