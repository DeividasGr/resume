import React from 'react';
import './index.css';

function Footer({ footerInfo }) {
  return footerInfo.map((footerBox, index) => {
    return (
      <div key={index} className="footer-box">
        <h3>{footerBox.title}</h3>
        {footerBox.content.map((value, index) =>
          value.isLink ? (
            <a key={index} href={value.href}>
              {value.text}
            </a>
          ) : (
            <p key={index}>{value.text}</p>
          )
        )}
      </div>
    );
  });
}

export default Footer;
