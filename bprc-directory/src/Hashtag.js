import React from 'react'
import { useEffect, useState } from "react";
import { directory } from "./config/firebase";
import { getDocs, collection } from 'firebase/firestore';

// have the same layout on every page
function Hashtag({children}) {

    const [hashtagList, setHashtagList] = useState([]);

    const hashtagCollectionRef = collection(directory, "Hashtags");

    useEffect(() => {
        //use async function to make the useEffect() work
        const getHashtagList = async () => {
        // read data from database
        // set the resource list
        try {
            const data = await getDocs(hashtagCollectionRef);
            const filteredData = data.docs.map((doc) =>({
            ...doc.data(), 
            id: doc.id,
            }));
            console.log(filteredData);
            setHashtagList(filteredData);
        } catch (err) {
            console.error(err);
        }
        };

        getHashtagList();

    }, []);
    
    return (
        <div className = "hashtags">
          {hashtagList.map((hashtags) => (
            <div className = "List">
              <h2> Hashtags </h2>
              <p> {hashtags.hashtag1} </p>
              <p> {hashtags.hashtag2} </p>
              <p> {hashtags.hashtag3} </p>
            </div>
          ))}
        </div>
        
    )
}

export default Hashtag