import './App.css';
import Repetition from './components/RepetitionExercise';
import Duration from './components/DurationExercise';
import React, { useState } from "react"

//Some code used from "Workshop 8 and 8b Zoom Video"

 function App() {
    let [displayComponent, setDisplayComponent] = useState(-1)
    let components = [<Repetition name="Sit Ups"></Repetition>, <Duration name="Mile Run"></Duration>]
  return (
      (displayComponent !== -1 ?
        <div className="App">
        {displayComponent !== -1 ? components[displayComponent] : undefined}
        <button onClick={() => setDisplayComponent(-1)}>Back</button>
        </div>
      :
        <div className="App">
        <h1>Exercise Today!</h1>
        <p>Choose an Exercise:</p>
        <p>
          <button onClick={() => setDisplayComponent(0)}>Sit Ups</button>
        </p>
        <p>
          <button onClick={() => setDisplayComponent(1)}>Mile Run</button>
        </p>
        </div>
      )
  );
}

export default App;