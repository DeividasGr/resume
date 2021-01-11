import React from 'react';

function Footer({ title, content }) {
  return (
    <div className="footer-box">
      <h3>{title}</h3>
      {content.map((value, index) =>
        value.isLink ? (
          <a key={index} href={value.href}>
            {value.content}
          </a>
        ) : (
          <p key={index}>{value.content}</p>
        )
      )}
    </div>
  );
}

export default Footer;
