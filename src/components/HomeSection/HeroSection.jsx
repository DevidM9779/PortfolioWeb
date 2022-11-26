import "./HeroSection.css"
import { Typewriter } from 'react-simple-typewriter'
import { Navbar } from "../Navbar/Navbar";
import { DownArrow } from "./DownArrow";

export const HeroSection = () => {
    return (
        <div className={"hero"}>
            <div className={"home-title"}>Hi, I'm David Milan </div>
            <div className={"subtitle"}>a<Typewriter loop={0} words={[' developer', 'n engineer', ' designer']}/></div>
            <DownArrow/>
        </div>
    )
}