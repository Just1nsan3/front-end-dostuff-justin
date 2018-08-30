import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';



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
                defaultOptions={{ styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]
}}
                

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
			            	<div className='googleMapInfo'>
			                 <InfoWindow 
			                 
			                 	onCloseClick={this.handleToggleOpen}>
			                 <div>
			                      <h4>{event.name}</h4>
			                      <a className='markerEvent' target='_blank' href={event.url}>Click here!</a>
			                      <img className='eventImg' src={event.image_url} />
			                 </div>
			                 </InfoWindow>
			                 </div> : null
         				}
			            </Marker>
			            )
					})
	        	}
			     
			        
	            	
        	</GoogleMap>

   	 	)
	}
}




export default withScriptjs(withGoogleMap(MarkerContainer));

