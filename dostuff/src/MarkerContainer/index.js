import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';



class MarkerContainer extends Component {
    constructor(props){
    	super(props);



    	this.state = {
    		isOpen: ""
    	}
    }

	handleToggleOpen = (i) => {
		this.setState({
			isOpen: i
		})


    }
    handleToggleClose = () => {
        this.setState({
            isOpen: false
        })
    }

    render(){



// centers you to chicago, IL and shows markers that are clickable
// markers show pulled data of events happening in chicago
    	return(
    	
        	<GoogleMap
                center={{lat:41.881832, lng: -87.623177}}
                zoom={13}
            >
	            {this.props.allEvents.map((event, i) => {

        			return(
			            <Marker key={i}
			                    position={{
			                        lat: event.latitude,
			                        lng: event.longitude
			                    }}
			                    onClick={() => this.handleToggleOpen(i)}

			
			            >
			            {this.state.isOpen === i ?
			                 <InfoWindow onCloseClick={this.handleToggleOpen}>
			                 <div>
			                      <h4>{event.name}</h4>
			                      <a className='markerEvent' target='_blank' href={event.url}>Click here!</a>
			                      <img className='eventImg' src={event.image_url} />
			                 </div>
			                 </InfoWindow> : null
         				}
			            </Marker>
			            )
					})
	        	}
			     
			        
	            	
        	</GoogleMap>

   	 	)
	}
}




export default withGoogleMap(MarkerContainer);

