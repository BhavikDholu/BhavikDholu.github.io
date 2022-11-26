import './App.css';

import AboutMe from './Routes/AboutMe';
import Home from './Routes/Home';
import Navbar from "./components/Navbar";
import AllRoutes from './Routes/AllRoutes';
import Skills from './Routes/Skills';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <AllRoutes />
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
