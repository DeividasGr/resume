import React from 'react';

function Header({ name, title }) {
  return (
    <div className="hero">
      <h1 className="hero-name">{name}</h1>
      <h3 className="hero-job-title">{title}</h3>
    </div>
  );
}

export default Header;
