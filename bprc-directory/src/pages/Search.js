import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { directory } from '../config/firebase';
import MainLayout from '../MainLayout';
import Hashtag from '../Hashtag';
// import DisplayCard from './Card';
// import Map from '../components/map';

function SearchResource() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    console.log('collection:', collection(directory, 'Resources'));
    console.log('where:', where);
    console.log('searchTerm:', searchTerm);

    const fetchData = async () => {
        if (searchTerm.trim() === '') {
          setSearchResults([]);
          return;
        }
  
        const q = query(collection(directory, 'Resources'), where('hashtag1', '==', searchTerm));
  
        try {
          const querySnapshot = await getDocs(q);
          const results = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setSearchResults(results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [searchTerm]);

  return (
    <div>
      <MainLayout />
      <div className="container">
        <div className="searchInputs">
          <div className="title">Search Resource</div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by hashtag"
            autoComplete="off"
            required
          />
          <div className="searchIcon"></div>
          <button type="submit">Search</button>
        </div>
        {/* <Hashtag /> */}
      </div>
      {/* <Map /> */}
      <div>
        <h3>Result:</h3>
        <div className = "card">
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>
                    {/* Check if result.data exists before accessing properties */}
                    {result.data && (
                        <>
                        <strong>ID:</strong> {result.id}
                        <br />
                        <strong>name:</strong> {result.data.name}
                        <br />
                        <strong>hashtag1:</strong> {result.data.hashtag1}
                        <br />
                        <strong>hashtag2:</strong> {result.data.hashtag2}
                        <br />
                        <strong>phone:</strong> {result.data.phone}
                        <br />
                        <strong>email:</strong> {result.data.email}
                        <br />
                        <strong>address:</strong> {result.data.address}
                        <br />
                        <strong>area:</strong> {result.data.area}
                        <br />
                        <strong>website:</strong> {result.data.website}
                        <br />
                        {/* Include other fields as needed */}
                        {/* <strong>AnotherField:</strong> {result.data.AnotherField} */}
                        {/* Add more fields as needed */}
                        </>
                    )}
                    </li>
                ))}
            </ul>
        </div>
        {/* <DisplayCard /> */}
      </div>
    </div>
  );
}

export default SearchResource;
