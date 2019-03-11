import React, { Component } from 'react';
import map from './site_content/map.json';
import { Map, Marker, Tooltip, TileLayer } from 'react-leaflet'

class MapTab extends Component {
  render() {
    return (
      <Map className='Map' center={map.properties.center} zoom={map.properties.zoom}>
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