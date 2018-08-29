import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';



const MarkerContainer = (props) => {
	const markers = props.allEvents.map((event, i) => {

		return(
			<Marker key={i}
					position={{
						lat: event.latitude,
						lng: event.longitude
					}}
			>
			<InfoWindow><h1>Please Show up</h1></InfoWindow>
			</Marker>
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

