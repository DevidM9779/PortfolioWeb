import "./ProjectsSection.css"
import {ProjectCard} from "./ProjectCard";

export const ProjectsSection = () => {

    return (
        <div className={"projects-container"} id={"projects"}>

            <ProjectCard
                animation={"fade-right"}
                logo={"/kfd.png"}
                title={"Kenosha Fire Department PWA"}
                description={"A progressive web app for the Kenosha local fire department that provides a more" +
                    " convenient and effective way for firefighters to stay up-to-date on the latest protocols" +
                    " and guidelines, and better equip them to handle emergencies safely and effectively."}
                technologies={["DiReact","DiFirebase"]}
                onClick={"https://kfd-dev-8bd67.firebaseapp.com/"}

            />
            <ProjectCard
                animation={"fade-left"}
                logo={"/sorting-visualizer.png"}
                title={"Sorting Algos Visualizer"}
                description={"This app allows users to see how different sorting algorithms work in real-time. " +
                    "The app includes a variety of algorithms to choose from and visualizes the progress of the " +
                    "sorting process as it runs."}
                technologies={["DiReact","DiFirebase"]}
                onClick={"https://github.com/DevidM9779/SortingAlgorithmsVisualizer"}
            />
            <ProjectCard
                animation={"fade-right"}
                logo={"/kfd.jpeg"}
                title={"Kenosha Fire Department PWA"}
                description={"A web app for the Kenosha local fire department."}
                technologies={["DiReact","DiFirebase"]}
                onClick={""}
            />

        </div>
    )
}

