function Welcome(props) {

  return (
    <section id="welcome">
      <div className="card">
            <div id="welcome-text">
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
            <button id="workButton">{props.buttonText}</button>
        </div>
    </section>
  )
}

export default Welcome