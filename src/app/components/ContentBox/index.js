import React from 'react';
import Divider from '../Divider';
import './index.css';

function ContentBox({ className, children, title = '' }) {
  return (
    <div className={className}>
      <h3 className={`${className}__header`}>{title}</h3>
      <Divider isFancy />
      {children}
    </div>
  );
}

export default ContentBox;
