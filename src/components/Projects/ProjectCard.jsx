import { useState } from "react"
import Media from "react-media"

function ProjectCard(props) {
    const [isBlur, setIsBlur] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)

    return (
        <Media query="(max-width: 600px)">
            {matches => {
                return matches ? 
                    <article className="card">
                        <img 
                        src={props.url} 
                        className="thumbnail flex-centered text-centered"
                        style= { {filter: wasClicked ? 'blur(2px)' : "none"} }
                        alt="Project thumbnail"
                        onClick={() => setWasClicked(!wasClicked)}
                        />
                        <a
                            href={props.redirect}
                            className="project-button text-centered flex-centered oxford-blue bold noselect absolute"
                            style={ 
                                {
                                    display: wasClicked ? "block" : "none",
                                    opacity: wasClicked ? "1" : "0",
                                    transition: "opacity 0.3s"
                                }
                                
                            }>
                            
                            {props.title}
                        </a>
                    </article> 
                :
                    <article 
                        className="card"
                        onMouseEnter={() => setIsBlur(true)}
                        onMouseLeave={() => setIsBlur(false)}
                        >
                            <img 
                                src={props.url} 
                                className="thumbnail flex-centered text-centered"
                                style= { {filter: isBlur ? 'blur(2px)' : "none"} }
                                alt="Project thumbnail"
                            />
                            <a
                                href={props.redirect}
                                className="project-button text-centered flex-centered oxford-blue bold noselect absolute">
                                {props.title}
                            </a>
                    </article> 
            }}
        </Media>
    )
}

export default ProjectCard