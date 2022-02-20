import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div>
      <a href="https://github.com/peemtanapat/" target="_blank">
        <FontAwesomeIcon className="social-icon" icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/peemtanapat/" target="_blank">
        <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
      </a>
      <a href="https://www.facebook.com/peemtanapat1997/" target="_blank">
        <FontAwesomeIcon className="social-icon" icon={faFacebook} />
      </a>
    </div>
  );
};

export default SocialIcons;
