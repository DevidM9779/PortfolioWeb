import {Navbar} from "./components/Navbar/Navbar";
import {HeroSection} from "./components/HomeSection/HeroSection";
import "./App.css"
import {AboutSection} from "./components/AboutSection/AboutSection";


function App() {
  return (
      <div className={"App"}>
          <Navbar/>
          <HeroSection/>
          <AboutSection/>
      </div>

  );
}

export default App;
