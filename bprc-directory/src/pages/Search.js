import * as React from 'react'
import { useState, useEffect } from 'react';
import MainLayout from "../MainLayout"
import { collection, query, where, doc, getDocs, deleteDoc } from "firebase/firestore";
import { directory } from '../config/firebase';
import "./style.css";

// https://www.youtube.com/watch?v=2yNyiW_41H8 
// https://www.youtube.com/watch?v=s1frrNxq4js
// Create search bar: https://www.youtube.com/watch?v=x7niho285qs 

// search for resource 
function SearchResource(){
    
    // const [name, getName] = useState('');

    const getResource = async (event) => {
        event.preventDefault(); 
        await getDocs(doc(directory, 'Resources', 'Document_ID', 'hashtag1'))
        .then((docSnap) => {
            let alertField = docSnap.data().alert_state
            console.log(alertField)
        })
    }

    const getHashtagResource = async (event) => {
        event.preventDefault(); 
        const q = query(collection(directory, 'resources'), where('hashtag1', '==', true));
        const querySnapshot = await getDocs(q); 
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data()); 
        });
    }

    const [hashtagList, setHashtagList] = useState([]);

    const hashtagCollectionRef = collection(directory, "Hashtags");

    useEffect(() => {
        getResource();

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

}
// delete documents
const deleteResource = document.querySelector('.delete')
// deleteResource.addEventListener('traah', (event) => {
//     event.preventDefault()

//     const resourceRef = doc(directory, 'Resources', deleteResource.id.value); 
    
//     deleteDoc(resourceRef)
//         .then(() => {
//             deleteResource.reset()
//         })
// })

// https://www.youtube.com/watch?v=ckkeZ_f3b-M
// Display the searched resource

function Search() {
    return (
        <div>
            <MainLayout> </MainLayout>
                <div className = 'container'> 
                {/* onSubmit = {getResource} */}
                    <div className = 'searchInputs'>
                        <div className = 'title'> Search Resource </div>
                        <input 
                            type = "text" 
                            name = "name" 
                            // value = {name} 
                            placeholder = "Search for hashtag"
                            autoComplete = "off"
                            required
                        />
                        <div className = 'searchIcon'> </div>
                        <button > Search </button>
                    </div>
                </div>

                <div className = "hashtags">
                    {/* {hashtagList.map((hashtags) => (
                        <div className = "List">
                        <h2> Hashtags </h2>
                        <p> {hashtags.hashtag1} </p>
                        <p> {hashtags.hashtag2} </p>
                        <p> {hashtags.hashtag3} </p>
                        </div>
                    ))} */}
                </div>
            {/* </MainLayout> */}
        
        </div>
    )
}

export default Search