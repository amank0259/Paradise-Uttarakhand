import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About';
import Destination from './Components/Destination';
import Tour from './Components/Tour';
import Contact from './Components/Contact';
import Topbar from './Components/Topbar';
import SocialLinks from './Components/SocialLinks';

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <SocialLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
