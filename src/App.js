import './App.css';
import React, { useState } from 'react';
var flagsDictionary = {
  "🇮🇳": "India",
  "🏁": "Chequered",
  "🚩": "Triangular",
  "🎌": "Crossed",
  "🏴": "Black",
  "🏳️": "White",
  "🏳️‍🌈": "Rainbow",
  "🏳️‍⚧️": "Transgender",
  "🏴‍☠️": "Pirate",
}
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
  
  return (
    <div className="App">
      <h1>Flag Interpreter</h1>
      <input onChange={onChangeEventHandler} />
      <div>{flagName}</div>
    </div>
  );
}

export default App;
