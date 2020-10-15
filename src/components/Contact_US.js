import React from 'react'

import './Contact_US.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-block">
        <div className="contact-about">About</div>
        <div className="contact-about-text">
          MY MISSION / Morbi non arcu risus quis. At risus viverra adipiscing at
          in tellus. Integer quis auctor elit sed vulputate mi. Cras ornare arcu
          dui vivamus arcu felis bibendum ut. Dolor sed viverra ipsum nunc
          aliquet bibendum enim facilisis. Quisque egestas diam in arcu cursus
          euismod quis viverra nibh. Malesuada fames ac turpis egestas.
          Vestibulum lectus mauris ultrices eros in cursus turpis. Faucibus et
          molestie ac feugiat sed. Convallis tellus id interdum velit laoreet.
          Sit amet luctus venenatis lectus magna fringilla urna. Morbi tristique
          senectus et netus. Nulla facilisi etiam dignissim diam quis enim
          lobortis
        </div>
        <div className="contact-getInTouch-form">
          <div className="contact-form-name">Get In Touch</div>
          <div className="contact-form-infoblock">
            <div className="contact-tel">
              <a href="tel:026-3444-555">tel:026-3444-555</a>
            </div>
            <div className="contact-email">
              <a href="mailto:INFO@pPHOTO.COM">INFO@pPHOTO.COM</a>
            </div>
          </div>
          <div className="contact-or">or</div>
          <form className="contact-form" action="submit">
            <div className="contact-form-rowOne">
              <input type="text" placeholder="Your Name" autoComplete="off" />
              <input
                type="email"
                placeholder="Email Aress"
                autoComplete="off"
              />
            </div>
            <div className="contact-form-rowTwo">
              <input
                type="text"
                placeholder="Write a short description of how you see out collaboration"
              />
            </div>
            <button className='contact-form-submit' type="submit">Send</button>
          </form>
        </div>
        <div className="contact-footer"></div>
      </div>
    </div>
  );
}

export default Contact;
