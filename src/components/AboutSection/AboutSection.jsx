import "./AboutSection.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DownloadButton } from "./DowloadButton";


export const AboutSection = () => {
    useEffect(() => {
        Aos.init({  duration: 1500  })
    }, []);
    return (
        <div className={"about-container"} id={"about"}>
            <div data-aos="fade-right" className={"section-body"}>
                <p>
                    I'm <b>David Milan-Medina</b>, a recent Computer Science and Mathematics graduate with a strong background in software development. I have experience with various programming languages and technologies, and I've worked on numerous projects, both academically and professionally.
                </p>
                <p>
                    I invite you to explore my resume and projects below to learn more about my skills and experiences. Thank you for visiting!
                </p>
                <DownloadButton
                    as = "button"
                    className = "custom-class"
                    color = "rgb(102, 215, 209)"
                    speed = "2s"
                    link="https://drive.google.com/uc?export=download&id=1xbhLY7vuYIq22x0qYh4Wr540lPikHBA2"
                >
                    Brag Sheet
                </DownloadButton>
            </div>
            
            <div data-aos="fade-left" className={"about-me-picture"}>
                <img src="/undraw_ideas_re_7twj.svg" alt="About Me" height="200px" width="200px"></img>
            </div>
        </div>
    )
}