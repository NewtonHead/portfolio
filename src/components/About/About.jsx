const skillList = 
  [{skill: "HTML", level: "Advanced"}, {skill: "CSS", level: "Intermediate"},
  {skill: "Javascript", level: "Intermediate"}, {skill: "React.js", level: "Intermediate"},
  {skill: "Java", level: "Begginer"}, {skill: "Python", level: "Intermediate"},
  {skill: "Linux", level: "Full-time user"}]

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
          {skillList.map((skill) => {
            return (
              <li className="flex-centered text-centered">
                <span className="tech bold almond text-centered oxford-blue-background">{skill.skill}</span> <span className="level bold oxford-blue text-centered almond-background">{skill.level}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default About