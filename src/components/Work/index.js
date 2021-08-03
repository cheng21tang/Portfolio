import React from 'react';
import './style.css';

function Work() {
  return (
    <>
      <div id="work-textbox">
        <div id="work-textbox-header">
          <img id="work" src="./assets/cheng-avatar-circle.svg" alt="Cheng Tang avatar"></img>
          <h4>work</h4>
        </div>
        <div id="work-textbox-body">
          <div className="text-sent">
            <p>here are some things i've worked on.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work;