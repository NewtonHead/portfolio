function About() {
  return (
    <section id="about">
      <h1 id="aboutTitle">About</h1>
      <div className="container">
        <img src="/images/portfolio-image.jpg" alt="" srcset="" />
        <h2>Who am i?</h2>
        <p id="paragraph">My name is Santiago, i live in Argentina
        and i am an independent Front-end developer
        </p>

        <ul id="skills">
          <li class="skill">
            <p class="tech">HTML</p> <p class="level">Advanced</p>
          </li>
          <li class="skill">
            <p>CSS</p> <p>Intermediate</p>
          </li>
          <li class="skill">
            <p>Javascript</p> <p>Intermediate</p>
          </li>
          <li class="skill">
            <p>React.js</p> <p>Intermediate</p>
          </li>
          <li class="skill">
            <p>Java</p> <p>Begginer</p>
          </li>
          <li class="skill">
          <p>Python</p> <p>Intermediate</p>
          </li>
          <li class="skill">
          <p>Linux</p> <p>Full-time User</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About