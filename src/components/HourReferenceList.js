import React, { Component } from 'react';

const HourReferenceList = (props) => {

  const hours = [];

  for (let i = 0; i < 24; i++) {

    if (i < 12) {
      hours.push(`${i} AM`);
    } else {
      hours.push(`${i} PM`);
    }

  }

  const hourList = hours.map(hour => {
    return <li key={hour}>{hour}</li>
  });


  return (

    <ul className='hour-reference'>
      {hourList}
    </ul>

  );

};

export default HourReferenceList;
