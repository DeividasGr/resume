import React from 'react';
import './index.css';

function PersonalInfo({ jobPosition, jobInfo = [], description, list = [] }) {
  return (
    <div className="work-box">
      <h4>{jobPosition}</h4>
      {jobInfo.map((info, index) => (
        <div key={index}>
          <p {...info}></p>
        </div>
      ))}
      <p>{description}</p>
      <ul>
        {list.map((singleList, index) => (
          <li key={index} {...singleList} />
        ))}
      </ul>
    </div>
  );
}

export default PersonalInfo;
