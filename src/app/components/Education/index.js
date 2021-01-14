import React from 'react';
import './index.css';

function Education({ educationInfo }) {
  return (
    <>
      {educationInfo.map((education, index) => {
        return (
          <div key={index}>
            <h3>{education.schoolName}</h3>
            <p>{education.year}</p>
            <p>{education.degree}</p>
          </div>
        );
      })}
    </>
  );
}

export default Education;
