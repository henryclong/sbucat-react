import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [40.9124, -73.1234];

class MapTab extends Component {
  render() {
    return (
      <Map className='Map' center={position} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapTab;