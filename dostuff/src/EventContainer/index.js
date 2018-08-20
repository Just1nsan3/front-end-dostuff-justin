import React, { Component } from 'react';
import Events from '../Events';


class EventContainer extends Component {
  constructor(){
    super();
    this.state = {

    }
  }


  componentDidMount(){
    this.getEvents().then((events) => {
      this.setState({
        events: events.data
      })
    }).catch((err) => {
      console.log(err)
    });
  }

  
}


