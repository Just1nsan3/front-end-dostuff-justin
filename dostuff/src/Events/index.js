import React from 'react';

const Events = (props) => {

  return (
    <div>
      <a target='_blank' href={props.eventInfo.url}><h4>{props.eventInfo.name}</h4></a>
    </div>
  )

}


export default Events;