import logo from './logo.svg';
import './App.css';
import { Auth } from "./components/auth.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> BPRC Resource Directory</p>
        <p> Access all available resources through the Boulder Pregnancy Rescource Center</p>
        <Auth />
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
