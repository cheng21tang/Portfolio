import React from 'react';
import './style.css';

function Sidenav() {
  return (
    <>
      <nav className="navbar">

        <div className="avatar">
          <a href="#martha" className="logo">
            <img id="avatar" src="./assets/avatar-hoodie.svg" alt="Cheng avatar"></img>
          </a>
          <h3 className="logo">hi. my name is <span id="cheng">Cheng</span>.</h3>
        </div>

        <div className="links">
          <div>
            <a className="link" href="#about">
              <h3>about</h3>
            </a>
          </div>
          <div>
            <a className="link" href="#work">
              <h3>work</h3>
            </a>
          </div>
          <div>
            <a className="link" href="#experience">
              <h3>experience</h3>
            </a>
          </div>
          <div>
            <a className="link" href="#contact">
              <h3>contact</h3>
            </a>
          </div>
        </div>

        <div className="social">
          <div className="socialLinks">
            <a href="https://github.com/cheng21tang" target="_blank" rel="noreferrer">
              <img className="socialIcon" src="./assets/github-original.svg" alt="github icon"></img>
            </a>
            <a href="https://www.linkedin.com/in/cheng21tang/" target="_blank" rel="noreferrer">
              <img className="socialIcon" src="./assets/linkedin.svg" alt="linkedIn icon"></img>
            </a>
            <a href="https://cheng21tang.medium.com/" target="_blank" rel="noreferrer">
              <img className="socialIcon" src="./assets/Medium_Symbol_NoPadding.svg" alt="medium icon"></img>
            </a>
          </div>
        </div>


      </nav>











    </>
  )
}

export default Sidenav;