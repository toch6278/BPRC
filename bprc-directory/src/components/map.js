// Map.js
import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Map ({ locations }) {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    margin: '2px'
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // BPRC: 40.02397709658467, -105.28108415727803
  const center = { lat: 40.02397709658467, lng: -105.28108415727803 }; // Set your default center


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

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={4}>
        {locations.map((location) => (
          <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );

};

export default Map;
