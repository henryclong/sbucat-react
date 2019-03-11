import React, { Component } from 'react';
import map from './site_content/map.json';
import { Map, Marker, Tooltip, TileLayer } from 'react-leaflet'

const position = [40.916635, -73.123167];//[40.9154, -73.1234];

class MapTab extends Component {
  render() {
    return (
      <Map className='Map' center={position} zoom={14.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          map.locations.map((l)=>(
            <Marker className='Marker' position={l.location}>
              {<Tooltip className='ToolTip' direction='top' offset={[0, -5]} opacity={1.0} permanent>
                <span>{l.label}</span>
              </Tooltip>}
            </Marker>
          ))
        }
      </Map>
    );
  }
}

export default MapTab;