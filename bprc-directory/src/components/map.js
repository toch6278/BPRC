// Map.js
<<<<<<< HEAD
import React, { useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import mapboxgl from 'mapbox-gl';
=======
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
>>>>>>> parent of 1480c3e (trying to get map to work)

function Map ({ locations }) {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

<<<<<<< HEAD
  // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

  // mapboxgl.accessToken = 'MAPBOX_ACCESS_TOKEN';
  // var map = new mapboxgl.Map({
  //   container: 'YOUR_CONTAINER_ELEMENT_ID',
  //   style: 'mapbox://styles/mapbox/streets-v11'
  // });

  const apiKey = process.env.MAPBOX_ACCESS_TOKEN;
  // BPRC: 40.02397709658467, -105.28108415727803
  // const center = { lat: 40.02397709658467, lng: -105.28108415727803 }; // Set your default center
  const center = { lat: 38.314, lng: -104.789 }; // Set your default center


  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
  //   script.async = true;
  //   script.defer = true; // Use defer attribute for asynchronous loading

  
  //   script.onload = () => {
  //     initMap();
  //   };

  //   script.addEventListener('load', () => {
  //     initMap();
  //   });    
  
  //   document.head.appendChild(script);
  
  //   // return () => {
  //   //   if (document.head.contains(script)) {
  //   //     document.head.removeChild(script);
  //   //   }
  //   // };
  // }, [apiKey]);

  // const initMap = () => {
  //   const map = new window.google.maps.Map(document.getElementById('map'), {
  //     center,
  //     zoom: 4,
  //   });

  //   const mapInstance = map;

  //   locations.forEach((location) => {
  //     const marker = new window.google.maps.Marker({
  //       position: { lat: location.lat, lng: location.lng },
  //       map: mapInstance,
  //       title: location.title,
  //     });

  //     marker.addListener('click', () => {
  //       console.log('Marker clicked:', location);
  //     });
  //   });
  // };
    useEffect(() => {
      mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN; // Replace with your Mapbox access token

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [center.lng, center.lat], // Note: Mapbox uses [lng, lat] format
        zoom: 4,
      });

      locations.forEach((location) => {
        new mapboxgl.Marker()
          .setLngLat([location.lng, location.lat])
          .addTo(map);
      });

      // Cleanup
      return () => map.remove();
    }, [locations]);
=======
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const center = { lat: 0, lng: 0 }; // Set your default center


  const initMap = () => {
    // Your map initialization logic here
    // Use the 'locations' prop to add markers or perform other map-related operations
  };
>>>>>>> parent of 1480c3e (trying to get map to work)

  return (
    // Google Maps
    // <LoadScript googleMapsApiKey={apiKey}>
    //   <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={4}>
    //     {locations.map((location) => (
    //       <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
    //     ))}
    //   </GoogleMap>
    // </LoadScript>

    // Mapbox Map
    <div ref = {mapContainerStyle}> </div>
  );

};

export default Map;
