import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class InfoWindowContainer extends Component {
  constructor(){
    super();

    this.state = {
      isOpen: false

    }
  }

  handleToggleOpen = () => {
  	this.setState({
  		isOpen: true
  	});
  }

  handleToggleClose = () => {
  	this.setState({
  		isOpen: false
  	});
}

render(){
	console.log(this.props.allEvents.map())
	return(
			<Marker
				key={this.props.index}
				position={{ lat: this.props.lat, lng: this.props.lng}}
				label={this.props.index.toString()}
				onClick={() => this.handleToggleOpen()}
				>

				{
	            this.state.isOpen &&
		         <InfoWindow onCloseClick={this.props.handleToggleClose}>
		             <span>Something</span>
		         </InfoWindow>
		        }


	        </Marker>
	    	)
		}
}

export default InfoWindowContainer;



 