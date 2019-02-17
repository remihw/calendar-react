import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WeekOverview from './components/WeekOverview'

class App extends Component {

  constructor() {

    super();

    this.state = {
      events: [
        {
          date: '2019-02-16',
          time: '14:00',
          title: 'coaching'
        },
        {
          date: '2019-02-18',
          time: '20:00',
          title: 'get schwifty'
        },
        {
          date: '2019-02-18',
          time: '21:00',
          title: 'blips and chitz'
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
