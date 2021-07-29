import React from 'react';
import './style.css';

function About() {
  return (
    <>
      <div id="about-textbox">
        <div id="about-textbox-header" className="row">
          <img id="about" src="./assets/cheng-avatar-circle.svg" alt="Cheng Tang avatar"></img>
          <h4>about</h4>
        </div>
        <div id="about-textbox-body">
          <div className="text-sent">
            <p>let me share a little about myself</p>
          </div>
          <div className="text-sent">
            <p>i'm a full-stack web developer with deep roots in providing business solutions.</p>
          </div>
          <div className="text-sent">
            <p>my professional background has influenced me to think about the end-user and to consider complete solutions that meet my stakeholder's needs.</p>
          </div>
          <div className="text-sent">
            <p>i love looking for efficiencies and putting them into practice.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;