import React from 'react';
import './index.css';

function PersonalInfo({ experiences }) {
  return (
    <>
      {experiences.map((experience, index) => {
        return (
          <div key={index} className="experience__container">
            {experience.info.map((information, index) => {
              return (
                <div key={index}>
                  <h4>{information.position}</h4>
                  <p>{information.company}</p>
                  <p>{information.years}</p>
                </div>
              );
            })}
            <p>{experience.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default PersonalInfo;
