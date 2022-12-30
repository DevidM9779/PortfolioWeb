import "./AboutSection.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const AboutSection = () => {
    useEffect(() => {
        Aos.init({  duration: 2000  })
    }, []);

    return (
        <div className={"about-container"} id={"about"}>
            <div data-aos="fade-right" className={"section-body"}>
                <p>
                    Welcome to my portfolio website! My name is <b>David</b> and I am a recent graduate with a degree in computer science and mathematics.
                </p>
                <p>
                    I have a strong foundation in software development, with experience in a variety of programming languages including java, javascript, python, c#, sql, swiftui...
                    I am also skilled in react, node, express, firebase, web3 and more!
                </p>
                <p>
                    During my time in school, I completed a number of projects that demonstrate my skills and ability to work on a team. I also completed an internship at <b>The App Factory</b> where I gained valuable experience working on real-world projects.
                </p>
                <p>
                    I am excited to begin my career as a software developer and am eager to apply my skills and knowledge to new challenges. <u>Thank you</u> for visiting my portfolio website and I hope you find my work interesting and relevant.
                </p>
            </div>
            <div data-aos="fade-left" className={"about-me-picture"}>
                <img src="/undraw_ideas_re_7twj.svg" alt="About Me" height="200px" width="200px"></img>
            </div>
        </div>
    )
}