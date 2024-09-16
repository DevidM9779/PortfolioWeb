import CircleLogo from "../CircleLogo/CircleLogo";
import './Navbar.css'
import {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai"

export const Navbar = () => {
    const [color, setColor] = useState(false);
    // const [home, setHome] = useState(true)
    // const [about, setAbout] = useState(false)
    // const [projects, setProjects] = useState(false)
    // const [contact, setContact] = useState(false)



    const changeColor = () => {
        if (window.scrollY > 180) setColor(true)
        else setColor(false)
    }

    window.addEventListener('scroll', changeColor)


    return(
        <div className="parent">
            <div className={color ? "hamburger-icon navbar-bg" : "hamburger-icon"}>
                <span aria-expanded="false"><AiOutlineMenu size={"24px"}/></span>
            </div>

            <div className='navbar-container'>
                <div className={color ? 'navbar navbar-bg' : 'navbar'}>

                    <div className={'navbar-menu'}>
                        <a className={'navbar-item'} href={"#about"}>About</a>
                        <a className={'navbar-item'} href={"#projects"}>Projects</a>
                        <a className={'navbar-item'} href={"#contact"}>Contact</a>
                    </div>

                </div>
            </div>
        </div>
    )
}