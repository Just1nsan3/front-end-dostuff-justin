import React from 'react';


const Events = (props) => {

  return (
    <div>
      <a target='_blank' href={props.eventInfo.url}><h4>{props.eventInfo.name}</h4></a>
      <button onClick={props.addEvent}>Add to Your Events</button>
    </div>
  )

}



export default Events;