import React from 'react';
import Divider from '../Divider';
import './index.css';

function Education({ educationInfo }) {
  return (
    <>
      {educationInfo.map((education, index, array) => {
        return (
          <div className="education__info" key={index}>
            <h3>{education.schoolName}</h3>
            <p>{education.year}</p>
            <p>{education.degree}</p>
            {index !== array.length - 1 && <Divider isFancy={false} />}
          </div>
        );
      })}
    </>
  );
}

export default Education;
