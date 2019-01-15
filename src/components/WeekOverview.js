import React, { Component } from 'react';
import { format, startOfWeek, endOfWeek, eachDay, isSameDay } from 'date-fns';

import HourReferenceList from './HourReferenceList';
import DaysOverview from './DaysOverview';

const WeekOverview = (props) => {

  const firstDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 }),
        lastDayOfWeek = endOfWeek(new Date(), { weekStartsOn: 1 }),
        eachDayOfWeek = eachDay(firstDayOfWeek, lastDayOfWeek);

  const daysOverview = eachDayOfWeek.map(day => {

    const events = props.events.filter(event => {
      return isSameDay(event.date, format(day, 'YYYY-MM-DD'));
    });

    return (

      <DaysOverview
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
      {daysOverview}
    </div>

  );

}

export default WeekOverview;
