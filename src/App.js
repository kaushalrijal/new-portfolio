import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Home />
        <About />
        <Skills />
        <Work />
        <Contact /> */}
      <Home />
      <About />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;
