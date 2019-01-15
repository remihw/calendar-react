import React, { Component } from 'react';

class DayOverview extends Component {

  constructor() {

    super();

    this.state = {};

  };

  render() {

    const hours = [];

    for (let i = 0; i < 24; i++) {
      hours.push(i);
    }

    const getEventsForHour = (hour) => {

      return this.props.events.map(event => {

        if (parseInt(event.time.split(':')[0]) === hour) {
          return <div key={event.title}>{event.title}</div>;
        }

      });

    }

    const hoursOverview = hours.map(hour => {

      return (
        <li key={hour}>
          {getEventsForHour(hour)}
        </li>
      )

    });

    return (

      <div className='day-overview'>

        <div className='header'>
          <div className='date'>{this.props.date}</div>
          <div className='day-of-week'>{this.props.dayOfWeek}</div>
        </div>

        <ul>{hoursOverview}</ul>

      </div>

    );

  };

};

export default DayOverview;
