import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconLinkedIn } from './assets/icons/linkedin.svg';
import { ReactComponent as IconInstagram } from './assets/icons/instagram.svg';

import './App.css';

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Vayn Group</a>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/vayngroup"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
            </a>
            <a
              href="https://twitter.com/vayngroup"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
            <a
              href="https://www.instagram.com/vayngroup/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/vayn-group"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedIn className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>
              Website coming soon. Please check back to know more. Shoot us an
              email if you're curious.
            </p>
          </div>
          <a href="mailto:thevayngroup@gmail.com">
            <div className="cta">Shoot us an email</div>
          </a>
          {/* <a href="mailto:user@example.com">
            <div className="cta">Schedule a 15min free consultation</div>
          </a> */}
        </div>
        {/* <div className="footer">
          <span>
            made with love by{' '}
            <a
              className="underlined"
              href="https://bluetec.bi"
              target="_blank"
              rel="noopener noreferrer"
            >
              bluetec
            </a>{' '}
          </span>
        </div> */}
      </div>
    );
  };
}

export default App;
