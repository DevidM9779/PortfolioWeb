import {Navbar} from "./components/Navbar/Navbar";
import {HeroSection} from "./components/HomeSection/HeroSection";
import "./App.css"
import {AboutSection} from "./components/AboutSection/AboutSection";
import {ProjectsSection} from "./components/Projects/ProjectsSection";
import {ContactSection} from "./components/Contact/ContactSection";

function App() {

  return (
      <div className={"App"}>
          <Navbar/>
          <HeroSection/>
          <AboutSection/>
          <ProjectsSection/>
          <ContactSection/>
      </div>

  );
}

export default App;
