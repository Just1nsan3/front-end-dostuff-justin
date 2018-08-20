import React, { Component } from 'react';
import Events from '../Events';
import {Route, Switch} from 'react-router-dom';



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


