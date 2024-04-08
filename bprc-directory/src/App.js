import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import { Auth } from "./components/auth.js";
import { directory } from "./config/firebase";
import { getDocs, cosllection } from 'firebase/firestore';
import MainLayout from "./MainLayout"
import Hashtag from "./Hashtag"
import SearchResource from "./pages/Search"


// need to make sure to have node.js, react.js (npm install react), and firebase is connected (npx install firebase)
// make sure you're in the right folder before you type npm start in the terminal
function App() {

  return (
    <div className="App">
      <MainLayout></MainLayout>
      <header className="App-header">
        <p> BPRC Resource Directory</p>
        <p> Access all available resources through the Boulder Pregnancy Rescource Center</p>
        {/* <Auth /> */}
        <SearchResource/>
        <Hashtag/>
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
