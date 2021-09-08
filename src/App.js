import './App.css';
import React, { useState } from 'react';
var flagsDictionary = {
  "🏁": "Chequered",
  "🚩": "Triangular",
  "🎌": "Crossed",
  "🏴": "Black",
  "🏳️": "White",
  "🏳️‍🌈": "Rainbow",
  "🏴‍☠️": "Pirate",
}
var flagsWeKnow = Object.keys(flagsDictionary);
function App() {
  var [flagName, setFlagName] = useState("");

  function onChangeEventHandler(event) {
    var userInput= event.target.value;
    flagName=flagsDictionary[userInput];
    if(flagName===undefined){
      flagName="Not present in our database";
      setFlagName(flagName);
    }else{
    setFlagName(flagName);
    }
  }

  function flagClickHandler(flags){
    flagName=flagsDictionary[flags];
    setFlagName(flagName);
  }

  return (
    <div className="App">
      <h1>Find Your Flag Name!</h1>
      <input id="flag-input" placeholder="Enter flag here!" onChange={onChangeEventHandler} />
      <div id="flag-output">{flagName}</div>
      <h3>Flags We Know</h3>
      {
        flagsWeKnow.map((flags)=>{
          return(
            <span 
              key={flags}
              onClick={()=>flagClickHandler(flags)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {flags}
            </span>
          )
        })
      }
    </div>
  );
}

export default App;
