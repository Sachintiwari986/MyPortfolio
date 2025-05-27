import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <button onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />

    </div>
  );
}

export default App;
