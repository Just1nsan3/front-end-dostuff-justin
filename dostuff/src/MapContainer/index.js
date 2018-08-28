import React, { Component } from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import MarkerContainer from "../MarkerContainer"


// 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBpS9m_h_obP2J-O-x3-P2HaEZP1yo7CPU&callback=initMap'



class MapContainer extends Component {
  constructor(){
    super();

    this.state = {
      location: "",
    }
}
  render() {
    return (
        <div className="mapContainer">
          <MarkerContainer
            allEvents={this.props.allEvents}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
    );
  }
}




export default MapContainer;