import React from 'react';
import './style.css';

function Work() {

  return (
    <>
      <div id="work-textbox">
        <div id="work-textbox-header">
          <img id="work" src={process.env.PUBLIC_URL + "/assets/cheng-avatar-circle - 9FEAFF.svg"} alt="Cheng Tang avatar"></img>
          <h4>work</h4>
        </div>
        <div id="work-textbox-body">
          <div className="text-sent">
            <p>here are some things i've worked on.</p>
          </div>
          <div className="card">
            <div id="card-body">
              <a href="https://cheng21tang.github.io/moogle/" target="_blank" rel="noreferrer">
                <div className="tooltip-box">
                  <img className="work-img" src={process.env.PUBLIC_URL + "/assets/moogle-search.gif"} alt="moogle"></img>
                  <span className="tooltip-text">check out Moogle</span>
                </div>
              </a>
            </div>
            <div id="card-footer">
              <p>a creative and challenging memory game built with React and deployed to GitHub Pages. </p>
            </div>
          </div>

          {/* project cards */}
          <div className="card">
            <div id="card-body">
              <a href="https://farquest.herokuapp.com/" target="_blank" rel="noreferrer">
                <div className="tooltip-box">
                  <img className="work-img" src={process.env.PUBLIC_URL + "/assets/farquest-battle-short.gif"} alt="far quest"></img>
                  <span className="tooltip-text">check out farQuest</span>
                </div>
              </a>
            </div>
            <div id="card-footer">
              <p>a turn-based medieval fantasy role-playing game deployed to Heroku.</p>
            </div>
          </div>

          <div className="card">
            <div id="card-body">
              <a href="http://cryptonite-env.eba-kvnfavpx.us-west-2.elasticbeanstalk.com/" target="_blank" rel="noreferrer">
                <div className="tooltip-box">
                  <img className="work-img" src={process.env.PUBLIC_URL + "/assets/cryptonite-demo.gif"} alt="cryptonite"></img>
                  <span className="tooltip-text">check out Cryptonite</span>
                </div>
              </a>
            </div>
            <div id="card-footer">
              <p>a cryptocurrency application for buying and trading on our platform deployed to AWS</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Work;