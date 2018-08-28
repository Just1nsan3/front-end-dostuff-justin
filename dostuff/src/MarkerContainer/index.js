import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';



const MarkerContainer = (props) => {
	console.log(props.allEvents)
	const markers = props.allEvents.map((event, i) => {

		return(
			<Marker key={i}
					position={{
						lat: event.latitude,
						lng: event.longitude
					}}
			/>
		)
	})
	return(
		<GoogleMap
	    	center={{lat:41.881832, lng: -87.623177}}
	    	zoom={10}
	    >
	     	{markers} 
	  	</GoogleMap>

	)
}
export default withGoogleMap(MarkerContainer);


