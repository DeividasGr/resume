import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import './index.css';

function SocialLinks({ socialItems }) {
  return (
    <>
      {socialItems.map((link) => {
        return (
          <div key={link.title} className="links-container">
            <a rel="noreferrer" href={link.href} target="_blank">
              {link.title.includes('Linkedin') ? (
                <FaLinkedin className="social-icon" />
              ) : link.title.includes('Facebook') ? (
                <FaFacebookSquare className="social-icon" />
              ) : link.title.includes('Github') ? (
                <FaGithubSquare className="social-icon" />
              ) : (
                ''
              )}
            </a>
            <p className="links__title">{link.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default SocialLinks;
