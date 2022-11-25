import "./HeroSection.css"
import { Typewriter } from 'react-simple-typewriter'
import {Navbar} from "../Navbar/Navbar";


export const HeroSection = () => {
    return (
        <div className={"hero"}>
            <Navbar/>
            <h1>Hi, I'm David Milan </h1>
            <h2>a<Typewriter loop={0} words={[' developer', 'n engineer', ' designer']}/></h2>
        </div>
    )
}