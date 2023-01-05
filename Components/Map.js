
import React from 'react';
import { useState } from 'react';
import ReactMapGl ,{Marker, Popup}from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'


export default function Map({searchResult}) {

  

    // TRANSFORM THE SEARH RESULT BJET INTO LATITUDE LONGITUDE OBJECT
    const coordinates = searchResult.map(result=> ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)
    //console.log(center)

    const [viewport, setViewport]= useState({
        width:'100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });
  return (
   <ReactMapGl
   mapStyle='mapbox://styles/sheyax/clchoswwp00jp14s1socg0vo7'
   mapboxAccessToken={process.env.mapbox_key}
   {...viewport}
   onViewportChange={(nextViewport)=> setViewport(nextViewport)}
   >

    {searchResult.map(result=> (
        <div key={result.long}>
            <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
            >
             <p></p>  
            </Marker>
        </div>
    ))}

   </ReactMapGl>
  );
}
