import React from 'react';
import './Footer.css'
import { version } from '../../package.json';

const Footer = () => {
  return (
    <div className="footer-section">
      <p className="footer-text">Version {version}</p>
    </div>
  );
};

export default Footer;
