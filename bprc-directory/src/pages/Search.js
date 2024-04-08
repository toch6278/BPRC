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

    const fetchData = async () => {
        if (searchTerm.trim() === '') {
            setSearchResults([]);
            return;
        }

        try {
            // Fetch all documents from the 'Resources' collection
            const querySnapshot = await getDocs(collection(directory, 'Resources'));

            // Filter the documents based on the search term
            const results = querySnapshot.docs
            .filter((doc) => {
                const data = doc.data();
                return data.hashtag1 === searchTerm || data.hashtag2 === searchTerm || (!data.hashtag2 && data.hashtag1 === searchTerm);
            })
            .map((doc) => ({ id: doc.id, data: doc.data() }));

            // Set the search results
            setSearchResults(results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        const handleSearch = (event) => {
        event.preventDefault();
        fetchData(); // Trigger fetchData when the search button is clicked
    };

  return (
    <div>
      <MainLayout />
      <div className="container">
        <form onSubmit={handleSearch} className="searchInputs">
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
        </form>
        {/* <Hashtag /> */}
      </div>
      {/* <Map /> */}
      <div className = "results">
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
                        <strong>Resource Name:</strong> {result.data.name}
                        <br />
                        <strong>Hashtag1:</strong> {result.data.hashtag1}
                        <br />
                        <strong>Hashtag2:</strong> {result.data.hashtag2}
                        <br />
                        <strong>Phone Number:</strong> {result.data.phone}
                        <br />
                        <strong>Email Address:</strong> {result.data.email}
                        <br />
                        <strong>Adddress:</strong> {result.data.address}
                        <br />
                        <strong>Area:</strong> {result.data.area}
                        <br />
                        <strong>Website:</strong> {result.data.website}
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