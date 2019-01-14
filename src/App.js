import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WeekOverview from './components/WeekOverview'

class App extends Component {

  constructor() {

    super();

    this.state = {
      events: [
        {
          date: '2019-01-16',
          time: '14:00',
          title: 'Coaching'
        },
        {
          date: '2019-01-18',
          time: '21:00',
          title: 'Party Hard'
        },
      ]
    };

  };

  render() {

    return (
      <WeekOverview events={this.state.events} />
    );

  };

}

export default App;

ReactDOM.render(<App />, document.getElementById("container"));
