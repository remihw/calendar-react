import React, { Component } from 'react';
import { format, startOfWeek, endOfWeek, eachDay, isSameDay } from 'date-fns';

import HourReferenceList from './HourReferenceList';
import DayOverview from './DayOverview';

const WeekOverview = (props) => {

  const firstDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 }),
        lastDayOfWeek = endOfWeek(new Date(), { weekStartsOn: 1 }),
        eachDayOfWeek = eachDay(firstDayOfWeek, lastDayOfWeek);

  const dayOverview = eachDayOfWeek.map(day => {

    const events = props.events.filter(event => {
      return isSameDay(event.date, format(day, 'YYYY-MM-DD'));
    });

    return (
      <DayOverview
        key={format(day, 'DDMMYY')}
        events={events}
        date={format(day, 'DD')}
        dayOfWeek={format(day, 'ddd').toUpperCase()}
      />
    );

  });

  return (

    <div className='week-overview'>
      <HourReferenceList />
      {dayOverview}
    </div>

  );

}

export default WeekOverview;
