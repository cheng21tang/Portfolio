import React from 'react';
import './home.css';
import Sidenav from '../components/Sidenav';
import Textbox from '../components/Textbox';

function Home() {
  return (
    <>
      <Sidenav/>
      <div id="main">
        <Textbox></Textbox>
      </div>
    </>
  )
}

export default Home;