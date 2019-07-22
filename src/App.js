import React from 'react';
import AboutMe from '../src/components/AboutMe';
import Navigation from '../src/components/Navigation';
import Form from '../src/components/Form';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <AboutMe />
      <Form />
    </React.Fragment>
  );
}

export default App;