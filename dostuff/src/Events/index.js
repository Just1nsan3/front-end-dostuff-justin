import React from 'react';


const Events = (props) => {

	//this returns a component that shows information about the event
  return (
  	<div>
	    <a className='events' target='_blank' href={props.eventInfo.url}>
	    <img  className='eventImg' src={props.eventInfo.image_url} alt={props.eventInfo.name}/>
	     <div> <h4>{props.eventInfo.name}</h4></div></a><br/>
	    <button onClick={props.addEvent}>Add to Your Events</button>
    </div>
    
  )

}

export default Events;