// import logo from './logo.svg';
import './styling/App.css';
import './styling/first-page.css'
import './styling/about-me.css';
import "./styling/work-experience.css";
import './styling/education.css';
import './styling/project.css';
import './styling/contact-me.css';

import './styling/dark-mode.css';

// importing other components from different files
import NavBar from './nav-bar';
import FirstPage from "./first-page";
import AboutMe from "./about-me"; 
import WorkExperience from './work-experience';
import Education from "./education"
import Projects from "./project";
import ContactMe from './contact-me';

import "./images/placeholder.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <FirstPage />
        <AboutMe />
        <WorkExperience />
        <Education />
        <Projects />
        <ContactMe />
      </header>
    </div>
  );
}

export default App;
