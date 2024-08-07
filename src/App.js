// import logo from './logo.svg';
import './styling/App.css';
import './styling/first-page.css'
import './styling/about-me.css';
import "./styling/work-experience.css";
import './styling/education.css';
import './styling/project.css';
import './styling/contact-me.css';

import './styling/dark-mode.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing other components from different files
import NavBar from './nav-bar';
import FirstPage from "./first-page";
import AboutMe from "./about-me";
import WorkExperience from './work-experience';
import Education from "./education"
import Projects from "./project";
import ContactMe from './contact-me';
import { DarkModeProvider } from './dark-mode';

import "./images/placeholder.png";


function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter basename='/website-project'>
        <div className="App">
          <NavBar />
          <header className="App-header">
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/experience" element={<WorkExperience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact-me" element={<ContactMe />} />
              <Route path="*" element={<FirstPage />} />
            </Routes>
          </header>
          {/* <footer>
            <p>&copy; 2023 Manas Srinivas Gowda. All rights reserved.</p>
          </footer> */}
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
