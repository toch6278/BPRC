// Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

function Map ({ locations }) {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const center = { lat: 0, lng: 0 }; // Set your default center


  const initMap = () => {
    // Your map initialization logic here
    // Use the 'locations' prop to add markers or perform other map-related operations
  };

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