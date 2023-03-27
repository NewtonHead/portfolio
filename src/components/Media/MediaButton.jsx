import { AiOutlineLinkedin } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"

const linkedinLink = "https://www.linkedin.com/in/santiago-lobo-ba924818a/"
const githubLink = "https://github.com/NewtonHead"

function MediaButton(props) {
    return (
        <a 
        className="almond mediaButton"
        href={props.media === "linkedin" ? linkedinLink : props.media === "github" ? githubLink : "#"}
        >
            {props.media === "linkedin" ? <AiOutlineLinkedin size={"2rem"}/> : 
            props.media === "github" ? <AiOutlineGithub size={"2rem"} /> : ""}
        </a>
    )
}

export default MediaButton