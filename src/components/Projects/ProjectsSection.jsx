import "./ProjectsSection.css"
import {ProjectCard} from "./ProjectCard";

export const ProjectsSection = () => {

    return (
        <div className={"projects-container"} id={"projects"}>

            <ProjectCard
                animation={"fade-right"}
                logo={"/kfd.jpeg"}
                title={"Kenosha Fire Department PWA"}
                description={"A web app for the Kenosha local fire department."}
            />
            <ProjectCard
                animation={"fade-left"}
                logo={"/kfd.jpeg"}
                title={"Kenosha Fire Department PWA"}
                description={"A web app for the Kenosha local fire department."}
            />
            <ProjectCard
                animation={"fade-right"}
                logo={"/kfd.jpeg"}
                title={"Kenosha Fire Department PWA"}
                description={"A web app for the Kenosha local fire department."}
            />

        </div>
    )
}

