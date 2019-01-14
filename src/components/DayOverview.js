import React, { Component } from 'react';

const DayOverview = (props) => {

  const hours = [];

  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }

  const getEventsForThisHour = (hour) => {
    return <span></span>;
  }

  const hourOverview = hours.map(hour => {

    return (
      <li key={hour}>
        {getEventsForThisHour()}
      </li>
    )

  });

  return (

    <div className='day-overview'>

      <div className='header'>
        <div className='date'>{props.date}</div>
        <div className='day-of-week'>{props.dayOfWeek}</div>
      </div>

      <ul>{hourOverview}</ul>

    </div>

  );

};

export default DayOverview;
