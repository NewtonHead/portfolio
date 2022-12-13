function About() {
  return (
    <section id="about">
      <h1 id="aboutTitle" class="title text-centered bold oxford-blue">About</h1>
      <div className="container">
        <img src="/images/portfolio-image.jpg" alt="" srcset="" id="me"/>
        <h2 id="whoami" class="title text-centered bold oxford-blue">Who am i?</h2>
        <p id="paragraph" class="flex-centered text-centered">My name is Santiago, i live in Argentina
        and i am an independent Front-end developer
        </p>

        <ul id="skills">
          <li class="flex-centered text-centered">
            <span class="tech bold almond text-centered">HTML</span> <span class="level bold oxford-blue text-centered">Advanced</span>
          </li>
          <li class="flex-centered text-centered">
            <span class="tech bold almond text-centered">CSS</span> <span class="level bold oxford-blue text-centered">Intermediate</span>
          </li>
          <li class="flex-centered text-centered">
            <span class="tech bold almond text-centered">Javascript</span> <span class="level bold oxford-blue text-centered">Intermediate</span>
          </li>
          <li class="flex-centered text-centered">
            <span class="tech bold almond text-centered">React.js</span> <span class="level bold oxford-blue text-centered">Intermediate</span>
          </li>
          <li class="flex-centered text-centered">
            <span class="tech bold almond text-centered">Java</span> <span class="level bold oxford-blue text-centered">Begginer</span>
          </li>
          <li class="flex-centered text-centered">
            <span class="tech bold almond text-centered">Python</span> <span class="level bold oxford-blue text-centered">Intermediate</span>
          </li>
          <li class="flex-centered text-centered">
            <span class="tech bold almond text-centered">Linux</span> <span class="level bold oxford-blue text-centered">Full-time User</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About