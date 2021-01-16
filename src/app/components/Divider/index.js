import React from 'react';

function Divider({ isFancy }) {
  const className = isFancy ? 'divider--fancy' : '';
  return <div className={`divider ${className}`}></div>;
}

export default Divider;
