import logo from './logo.svg';
import './App.css';

// importing other components from different files
import AboutMe from "./about-me";
import WorkExperience from './work-experience';
import Education from "./education"

import "./images/placeholder.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Manas Srinivas Gowda</p>
        <AboutMe />
        <WorkExperience />
        <Education />
      </header>
    </div>
  );
}

export default App;
