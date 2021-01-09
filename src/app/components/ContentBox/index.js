import React from 'react';
import Divider from '../Divider';
import './index.css';

function ContentBox({ className, children, title = '' }) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <Divider />
      {children}
    </div>
  );
}

export default ContentBox;
