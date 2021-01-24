import React from 'react';
import FooterBox from '../FooterBox';
import './index.css';

function Footer({ footerInfo }) {
  return (
    <>
      <FooterBox footerInfo={footerInfo} />
    </>
  );
}

export default Footer;
