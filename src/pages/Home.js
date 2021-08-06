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
      <main>
        {/* <div id="topBlock"></div> */}

        <section className="glass">
          <Sidenav />
          <div className="textboxes">
            <Martha />
            <About />
            <Work />
            <Experience />
            <Contact />
          </div>
        </section>

        {/* <div id="bottomBlock"></div> */}
      </main>
    </>
  )
}

export default Home;