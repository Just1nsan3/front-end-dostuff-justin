import React from 'react';

const Events = (props) => {

  const movieList = props.movies.map((event, i) => {
    return (
      <li key={event._id}>
        <span>{event.title}</span>
        <small>{event.description}</small>
        <button onClick={props.deleteevent.bind(null, event._id)}>Delete</button>
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