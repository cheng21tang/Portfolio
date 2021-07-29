import React from 'react';
import './style.css';

function Martha() {
  return (
    <>
      <div id="martha-textbox">
        <div id="martha-textbox-header" className="row">
          <img id="martha" src="./assets/martha-beck-avatar.svg" alt="Martha Beck avatar"></img>
          <h4>Martha Beck</h4>
        </div>
        <div id="martha-textbox-body">
          <div className="text-receive">
            <p>the way we do anything</p>
            <p>is the way we do everything.</p>
          </div>
          <div className="text-sent">
            <p>so true!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Martha;