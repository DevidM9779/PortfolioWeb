import "./ProjectCard.css";
import "aos/dist/aos.css";
import Aos from "aos";
import {useEffect} from "react";

export const ProjectCard = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos={props.animation} className={"project-card-container"}>
            <img src={props.logo} alt={"logo-image"}/>
            <div className={"project-data"}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className={"technologies-container"}></div>
            </div>
        </div>
    )
}