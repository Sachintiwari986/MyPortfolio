import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/PortfolioNavbar";
import About from "./components/About";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/contact";
import Projects from "./components/Projects";
import "./App.css";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  const StyleNavHead = {
    fontSize: "24px",
  };

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <Navbar
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        refs={{
          aboutRef,
          skillsRef,
          projectsRef,
          experienceRef,
          educationRef,
          contactRef,
        }}
      />
      <div className='container mt-5'>
        <div ref={aboutRef}>
          <About style={StyleNavHead} />
        </div>
        <div ref={skillsRef}>
          <Skills style={StyleNavHead} />
        </div>
        <div ref={projectsRef}>
          <Projects style={StyleNavHead} />
        </div>
        <div ref={experienceRef}>
          <Experience style={StyleNavHead} />
        </div>
        <div ref={educationRef}>
          <Education style={StyleNavHead} />
        </div>
      </div>
      <div ref={contactRef}>
        <Contact style={StyleNavHead} />
      </div>
    </div>
  );
}

export default App;
