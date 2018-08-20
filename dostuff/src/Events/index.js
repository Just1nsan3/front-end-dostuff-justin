import React from 'react';

const Events = (props) => {

  const eventList = props.events.map((event, i) => {
    return (
      <li key={event._id}>
        <span>{event.title}</span>
        <small>{event.description}</small>
        <button onClick={props.deleteEvent.bind(null, event._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, event._id, i)}>Edit</button>
      </li>
      )
  });

  return (
    <ul>
      {eventList}
    </ul>
    )
}


export default Event;