import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;
