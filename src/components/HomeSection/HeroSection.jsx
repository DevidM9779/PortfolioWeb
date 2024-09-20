import "./HeroSection.css"
import { Typewriter } from 'react-simple-typewriter'
import { DownArrow } from "./DownArrow";

export const HeroSection = () => {
    return (
        <div className={"hero"}>
            <div className="home-container">
                <div className={"home-title"}>Hi, I'm David Milan </div>
                <div className="subtitle-container">
                    <div className="emptyContainer"></div>
                    <div className={"subtitle"}>a<Typewriter loop={0} words={[' developer', 'n engineer', ' designer']}/></div>
                </div>
            </div>
            <DownArrow/>
        </div>
    )
}