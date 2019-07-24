import React from 'react';
import Navigation from '../src/components/Navigation';
import AboutMe from '../src/components/AboutMe';
import TechSkills from '../src/components/TechSkills';
import SoftSkills from '../src/components/SoftSkills';
import Projects from '../src/components/Proyects';
import Contact from '../src/components/Contact';
import Form from '../src/components/Form';
import Home from '../src/components/Home';
import './App.css';

function App() {
  return (
    <React.Fragment>
      {/*<Navigation />*/}
      <Home />
      <AboutMe />
      <TechSkills />
      <SoftSkills />
      <Projects />
      <Contact />
      <Form />
    </React.Fragment>
  );
}

export default App;