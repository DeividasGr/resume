import React from 'react';
import './index.css';

function Select({ options = [], changeLanguage }) {
  return (
    <select
      onChange={changeLanguage}
      className="header-lang"
      name="languages"
      id="languages"
    >
      {options.map((singleOption, index) => (
        <option key={index} {...singleOption}></option>
      ))}
    </select>
  );
}

export default Select;
