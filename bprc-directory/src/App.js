import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import { Auth } from "./components/auth.js";
import { db } from "./config/firebase";
import { getDocs, collection } from 'firebase/firestore';
import MainLayout from "./MainLayout"

// need to make sure to have node.js, react.js (npm install react), and firebase is connected (npx install firebase)
// make sure you're in the right folder before you type npm start in the terminal
function App() {

  const [hashtagList, setHashtagList] = useState([]);

  const hashtagCollectionRef = collection(db, "Hashtags");

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
    <div className="App">
      <MainLayout></MainLayout>
      <header className="App-header">
        <p> BPRC Resource Directory</p>
        <p> Access all available resources through the Boulder Pregnancy Rescource Center</p>
        <Auth />
        <div>
          {hashtagList.map((hashtags) => (
            <div className = "List">
              <h1> Hashtags </h1>
              <p> {hashtags.hashtag1} </p>
              <p> {hashtags.hashtag2} </p>
              <p> {hashtags.hashtag3} </p>
              </div>
          ))}
        </div>
      </header>
      


    </div>
  );
}

export default App;

/*
Command line for deploying later: 

firebase login
firebase init
firebase deploy
*/
