import React, {Component} from 'react';
import Events from './Events';

class YourEventsContainer extends Component {
  constructor(){
    super();
    this.state = {
      events: [],
      date: ''
    }
  }

// Add add and unadd buttons

  render(){
    return (
      <div>
        <ul>
          <li>{eventList}</li>
        </ul>

      </div>
    )
  }
}


export default YourEventsContainer;