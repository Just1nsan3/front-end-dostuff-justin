import React, { Component } from 'react'
import {withGoogleMap, GoogleMap, Marker, withScriptjs} from 'react-google-maps';
import MarkerContainer from '../MarkerContainer'
import InfoWindowContainer from '../InfoWindowContainer'


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
            googleMapUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpS9m_h_obP2J-O-x3-P2HaEZP1yo7CPU&callback=initMap"
            allEvents={this.props.allEvents}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            index={4}
          />

        </div>
    );
  }
}




export default MapContainer;