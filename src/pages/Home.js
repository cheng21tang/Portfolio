import React from 'react';
import './home.css';
import Sidenav from '../components/Sidenav';
import Martha from '../components/Martha';
import About from '../components/About';
import Work from '../components/Work';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Sidenav/>
      <div id="main">
        <Martha />
        <About />
        <Work />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default Home;