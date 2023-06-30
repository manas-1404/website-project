import logo from './logo.svg';
import './App.css';

// importing other components from different files
import AboutMe from "./about-me";
import WorkExperience from './work-experience';

import "./images/placeholder.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React is reacting lol</p>
        <AboutMe />
        <WorkExperience />
      </header>
    </div>
  );
}

export default App;
