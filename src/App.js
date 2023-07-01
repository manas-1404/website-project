import logo from './logo.svg';
import './App.css';

// importing other components from different files
import AboutMe from "./about-me";
import WorkExperience from './work-experience';
import Education from "./education"
import Projects from "./project";

import "./images/placeholder.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Manas Srinivas Gowda</p>
        <AboutMe />
        <WorkExperience />
        <Education />
        <Projects />
      </header>
    </div>
  );
}

export default App;
