function Welcome(props) {

  return (
    <section id="welcome" className="almond flex-centered">
      <div className="welcome-card text-centered absolute">
            <div id="welcome-text">
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
            <button id="workButton" className="almond">{props.buttonText}</button>
        </div>
    </section>
  )
}

export default Welcome