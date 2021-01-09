import React from 'react';
import './index.css';

function PersonalInfo({ jobPosition, jobInfo = [], description, list = [] }) {
  return (
    <div className="work-box">
      <h4>{jobPosition}</h4>
      {jobInfo.map((info, index) => (
        <div key={index}>
          <p>{info.company}</p>
          <p>{info.date}</p>
        </div>
      ))}
      <p>{description}</p>
      <ul>
        {list.map((singleList) => (
          <>
            <li>{singleList.listItem}</li>
            <li>{singleList.listItem2}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default PersonalInfo;
