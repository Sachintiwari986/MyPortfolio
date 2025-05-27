import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/PortfolioNavbar';
import About from './components/About';
import Skills from './components/skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/contact';
import Projects from './components/Projects';
import './App.css';
import { useRef } from 'react';




function App() {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
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
          contactRef
        }}
      />
      <div className="container mt-5">
        <div ref={aboutRef}><About /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={educationRef}><Education /></div>
      </div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;
