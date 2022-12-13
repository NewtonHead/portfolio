function About() {
  return (
    <section id="about">
      <h1 id="aboutTitle" class="title">About</h1>
      <div className="container">
        <img src="/images/portfolio-image.jpg" alt="" srcset="" id="me"/>
        <h2 id="whoami" class="title">Who am i?</h2>
        <p id="paragraph" class="all-centered">My name is Santiago, i live in Argentina
        and i am an independent Front-end developer
        </p>

        <ul id="skills">
          <li class="all-centered">
            <span class="tech bold almond">HTML</span> <span class="level bold oxford-blue">Advanced</span>
          </li>
          <li class="all-centered">
            <span class="tech bold almond">CSS</span> <span class="level bold oxford-blue">Intermediate</span>
          </li>
          <li class="all-centered">
            <span class="tech bold almond">Javascript</span> <span class="level bold oxford-blue">Intermediate</span>
          </li>
          <li class="all-centered">
            <span class="tech bold almond">React.js</span> <span class="level bold oxford-blue">Intermediate</span>
          </li>
          <li class="all-centered">
            <span class="tech bold almond">Java</span> <span class="level bold oxford-blue">Begginer</span>
          </li>
          <li class="all-centered">
            <span class="tech bold almond">Python</span> <span class="level bold oxford-blue">Intermediate</span>
          </li>
          <li class="all-centered">
            <span class="tech bold almond">Linux</span> <span class="level bold oxford-blue">Full-time User</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About