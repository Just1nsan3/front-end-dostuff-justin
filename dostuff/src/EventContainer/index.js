import React, { Component } from 'react';
import Events from '../Events';
import {Route, Switch} from 'react-router-dom';


// Is this the category page?
// FETCH LINKS ARE MISSING!!!!!!!!!!!!!!!!!!!!



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


  getEvents = async () => {
    const events = await fetch('', {
      credentials: 'include',
      method: 'GET'
    });
    const parsedEvents = events.json();

    return parsedEvents
  }


  // addEvent = async (event, e) => {
  //   e.preventDefault();
  //   try {
  //     const events
  //   }
  // }


  deleteEvent = async (id, e) => {
    e.preventDefault();
    console.log('deleteEvent function is being called, this is the id: ', id);
    try {
      const deleteEvent = await fetch('' + id, {
        method: 'DELETE'
      });

      const parsedResponse = await deleteEvent.json();

      this.setState({events: this.state.events.filter((event, i) => event._id !== id)});
    } catch(err) {
      console.log(err);
    }
  }


  showModal = (id) => {

  }






  render(){
    return(
      <div>
        <Events
          events={this.state.events}
          deleteEvent={this.deleteEvent}
          showModal={this.showModal}
        />
      </div>
    )
  }
}


export default EventContainer;