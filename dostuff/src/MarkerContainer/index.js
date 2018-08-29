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


		// const state = this.state
		// // change stuff in state
		// this.setState(state)


    }
    handleToggleClose = () => {
        this.setState({
            isOpen: false
        })
    }

    render(){




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
			                      <h4>{event.name}</h4>
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

