import './App.css';

import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Github from './components/Github';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
