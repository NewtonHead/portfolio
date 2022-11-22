function About() {
  return (
    <section id="about">
      <h1 id="aboutTitle" class="title">About</h1>
      <div className="container">
        <img src="/images/portfolio-image.jpg" alt="" srcset="" />
        <h2 id="whoami" class="title">Who am i?</h2>
        <p id="paragraph" class="all-centered">My name is Santiago, i live in Argentina
        and i am an independent Front-end developer
        </p>

        <ul id="skills">
          <li class="all-centered">
            <span class="tech">HTML</span> <span class="level">Advanced</span>
          </li>
          <li class="all-centered">
            <span class="tech">CSS</span> <span class="level">Intermediate</span>
          </li>
          <li class="all-centered">
            <span class="tech">Javascript</span> <span class="level">Intermediate</span>
          </li>
          <li class="all-centered">
            <span class="tech">React.js</span> <span class="level">Intermediate</span>
          </li>
          <li class="all-centered">
            <span class="tech">Java</span> <span class="level">Begginer</span>
          </li>
          <li class="all-centered">
          <span class="tech">Python</span> <span class="level">Intermediate</span>
          </li>
          <li class="all-centered">
          <span class="tech">Linux</span> <span class="level">Full-time User</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About