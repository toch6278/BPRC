<<<<<<< HEAD
// import * as React from 'react'
// import { useState, useMemo, useCallback, useRef } from 'react';
// import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer} from "@react-google-maps/api";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Source: https://www.youtube.com/watch?v=6mFaeJ4JfVM 

// export default class Map extends React.Component {

//     // header = () =? {
//     //     return {
=======
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
>>>>>>> parent of 1480c3e (trying to get map to work)

//     //     }
//     // }
//     // map = () => {
//     //     return {
//     //         <div className = "map"> Map </div>
//     //     }
//     // }

<<<<<<< HEAD
// <<<<<<< HEAD
// <<<<<<< HEAD
//   return (
//     <LoadScript googleMapsApiKey={apiKey}>
//       <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={4}>
//         {locations.map((location) => (
//           <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );

// };

// export default Map;
// =======
// =======
// >>>>>>> parent of ee661e7 (fix clearing inputs after inputted)
//     // render()
//     // {
//         // return (
            
//         // )
//     // }
// <<<<<<< HEAD
// }
// >>>>>>> parent of ee661e7 (fix clearing inputs after inputted)
// =======
// }
// >>>>>>> parent of ee661e7 (fix clearing inputs after inputted)
=======
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
>>>>>>> parent of 1480c3e (trying to get map to work)
