import './App.css';
import ShortBio from './components/ShortBio';
import CreatePosts from './components/CreatePosts';
import React, { useState } from "react"

const showterms = {
  "show":"New Girl",
  "mainCharacter": "Jessica Day",
  "year": 2011,
  "seasons": "seven"
}

function App() {
  let [displayComponent, setDisplayComponent] = useState(-1)
  let components = [<ShortBio data={showterms}></ShortBio>,<CreatePosts data={showterms}></CreatePosts>]
  return (
    (displayComponent !== -1 ?
      <div className="App">
      {displayComponent !== -1 ? components[displayComponent] : undefined}
      <p>Return to Home: <button onClick={() => setDisplayComponent(-1)}>Back</button></p>
      </div>
    :
      <div className="App">
      <h1>What is my favorite show?</h1>
      <p>Choose a Topic:</p>
      <p>
        <button onClick={() => setDisplayComponent(0)}>Short Bio</button>
      </p>
      <p>
        <button onClick={() => setDisplayComponent(1)}>Some Posts</button>
      </p>  
      </div>
    )
  );
}

export default App;
