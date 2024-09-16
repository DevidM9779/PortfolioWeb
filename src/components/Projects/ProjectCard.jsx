import "./ProjectCard.css";
import "aos/dist/aos.css";
import Aos from "aos";
import {useEffect} from "react";
import * as ReactIcon from "react-icons/di"


export const ProjectCard = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const projectLink = () => {
        window.open(props.onClick, '_blank');
    }

    return (
        <div data-aos={props.animation} className={"project-card-container"} onClick={projectLink}>
            <div className="img-container">
                <img src={props.logo} alt={"logo-image"}/>
            </div>
            <div className={"project-data"}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className={"technologies-container"}>
                    {
                        props.technologies.map((techName) => {
                            const IconComponent = ReactIcon[techName]
                            return(
                                <div title={techName}>
                                    <IconComponent size={20}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}