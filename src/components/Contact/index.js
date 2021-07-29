import React from 'react';
import './style.css';

function Contact() {
  return (
    <>
      <div id="contact-textbox">
        <div id="contact-textbox-header" className="row">
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
          <div className="text-receive">
            <p>email Cheng!</p>
          </div>
          <div className="text-receive">
            <form>
              <label for="username">your name:</label>
              <input type="text" id="name" name="name" />
              <label for="pwd">message:</label>
              <input type="text" id="message" name="message" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;