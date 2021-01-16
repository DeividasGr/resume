import React from 'react';
import Select from '../Select';
import './index.css';

function Header({ name, title, changeLanguage }) {
  return (
    <header className="header">
      <Select
        changeLanguage={changeLanguage}
        options={[
          { value: 'en', children: 'English' },
          { value: 'lt', children: 'Lietuviškai' },
        ]}
      />
      <div className="hero">
        <h1 className="hero-name">{name}</h1>
        <h3 className="hero-job-title">{title}</h3>
      </div>
    </header>
  );
}

export default Header;
