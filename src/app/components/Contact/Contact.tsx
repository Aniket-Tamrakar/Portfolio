import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content-wrapper">
        <div className="contact-form">
          <h1 className="contact-form-title">Send me a message !</h1>
          <p className="contact-form-description">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="contact-form-input-wrapper">
            <div className="contact-form-input-wrapper-name-email">
              <div className="name-input-wrapper">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input type="text" placeholder="Enter your name" className="input-field" />
              </div>
              <div className="email-input-wrapper">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field"
                />
              </div>
            </div>
            <label className="message-label" htmlFor="message">
              Message
            </label>
            <input type="text" placeholder="Enter your message" className="input-field" />
          </div>
        </div>
      </div>
    </div>
  );
}
