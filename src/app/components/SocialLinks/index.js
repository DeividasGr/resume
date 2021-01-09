import React from 'react';
import './index.css';

function SocialLinks({ href, image, alt, children }) {
  return (
    <div className="links-container">
      <a rel="noreferrer" href={href} target="_blank">
        <img src={image} alt={alt} />
      </a>
      <p>{children}</p>
    </div>
  );
}

export default SocialLinks;
