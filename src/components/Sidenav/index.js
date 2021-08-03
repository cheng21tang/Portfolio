import React from 'react';
import './style.css';

function Sidenav() {
  return (
    <>
      <nav className="navbar">
        
        <div className="avatar">
          <a href="/" className="logo">
            <img id="avatar" src="./assets/avatar-hoodie.svg" alt="Cheng avatar"></img>
          </a>
          <h3 className="logo">hi. my name is Cheng.</h3>
        </div>

        <div className="links">
          <div className="link">
            <h3>about</h3>
          </div>
          <div className="link">
            <h3>work</h3>
          </div>
          <div className="link">
            <h3>experience</h3>
          </div>
          <div className="link">
            <h3>contact</h3>
          </div>
        </div>

        <div className="social">
          <h5>Social</h5>
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