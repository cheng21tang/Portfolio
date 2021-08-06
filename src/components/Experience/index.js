import React from 'react';
import './style.css';

function Experience() {
  return (
    <>
      <div id="experience-textbox">
        <div id="experience-textbox-header">
          <img id="experience" src={process.env.PUBLIC_URL + "/assets/cheng-avatar-circle - 85DF9B.svg"} alt="Cheng Tang avatar"></img>
          <h4>experience</h4>
        </div>
        <div id="experience-textbox-body">
          <div className="text-sent">
            <p>experiences shape who we all are. here are some of mine.</p>
          </div>
          <div className="text-sent">
            <p>i've been a project manager for various technologies and business processes working along side cross-functional teams.</p>
          </div>
          <div className="text-sent">
            <p>i've contributed with dev teams using the agile approach and methodologies.</p>
          </div>
          <div className="text-sent">
            <p>i'm a subject matter expert in order management systems and fraud in ecommerce.</p>
          </div>
          <div className="text-sent">
            <p>i love using data to tell stories and in the decision making process.</p>
          </div>
          <div className="text-sent">
            <p>i've been an entrepreneur!</p>
          </div>
          <div className="text-sent">
            <p>i've lead teams as a manager, coach, and mentor.</p>
          </div>

          {/* resume link */}
          <div className="card">
            <div id="card-body">
              <a href="https://docs.google.com/document/d/13UxoO2tGURsT5STTFxtRGpCIMjzWiN_eWnvw3ciuA1g/edit?usp=sharing" target="_blank" rel="noreferrer">
                <div className="tooltip-box">
                  <img className="work-img" src={process.env.PUBLIC_URL + "/assets/resume.gif"} alt="resume"></img>
                  <span className="tooltip-text">check out my resume</span>
                </div>
              </a>
            </div>
            <div id="card-footer">
              <p><img id="finger" src={process.env.PUBLIC_URL + "/assets/backhand-index-pointing-up_1f446.png"} alt="finger pointer"></img> do you want a copy of my resume?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience;