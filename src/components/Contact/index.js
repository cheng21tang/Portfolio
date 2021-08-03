import React from 'react';
import './style.css';

function Contact() {
  return (
    <>
      <div id="contact-textbox">
        <div id="contact-textbox-header">
          <img id="contact" src="./assets/cheng-avatar-circle.svg" alt="Cheng Tang avatar"></img>
          <h4>contact</h4>
        </div>
        <div id="contact-textbox-body">
          <div className="text-sent">
            <p>here's how you can get a hold of me</p>
          </div>
          <div className="text-sent">
            <p>send me an email at cheng21tang@gmail.com</p>
          </div>
          <a id="emailLink" href="mailto:cheng21tang@gmail.com" rel="noreferrer" target="_blank">
            <img id="emailIcon" src="./assets/email.svg" alt="email icon"></img>
          </a>

          {/* Comment this in if I want to use a in browser messaging system */}
          {/* <div className="text-receive">
            <form id="contactForm">
                <input placeholder="name" type="text" />
                <input placeholder="email" type="text" />
                <input placeholder="message" type="text" />
            </form>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default Contact;