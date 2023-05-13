const skillList = 
  [{skill: "HTML", level: "Advanced"}, {skill: "CSS", level: "Intermediate"},
  {skill: "Javascript", level: "Intermediate"}, {skill: "React.js", level: "Intermediate"},
  {skill: "Java", level: "Begginer"}, {skill: "Python", level: "Intermediate"},
  {skill: "Linux", level: "Full-time user"}]

function About() {
  return (
    <section id="about">
      <h1 id="aboutTitle" className="title text-centered bold oxford-blue">About</h1>
      <div className="container">
        <img src="/images/portfolio-image.jpg" alt="" srcset="" id="me" className="flex-centered"/>
        <h2 id="whoami" className="title text-centered bold oxford-blue">Who am i?</h2>
        <p id="paragraph" className="flex-centered text-centered">
          Hi! My name is Santiago, and i am a React Developer residing
          in Argentina, i've always been interested in the design of websites
          and tools that could solve real-world problems, so i started my coding
          career on freecodecamp 4 years ago. <br /> <br />

          I believe that the most valuable way to make an idea come true, is
          communication, so i always try to make it my first priority with
          my co-workers. <br /> <br />

          Thank you for passing by, feel free to check all my portfolio and if
          you are interested in working with me, please, send me a message!
          
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