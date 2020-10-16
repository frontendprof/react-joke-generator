import React, {useState,useEffect} from 'react';



const API_URL="http://api.icndb.com/jokes/random";



function App() {

  const [joke,setJoke]=useState("");

  const generateJoke=()=>{
    fetch(API_URL)
    .then(res=>res.json())
    .then(data=>setJoke(data.value.joke))
  }

  useEffect(()=>{
    generateJoke();
    
  },[])



  return (
    <div className="App">
      <h1>Chuck Norris Jokes Generators</h1>
      <h2 dangerouslySetInnerHTML={{__html: joke }}></h2>
      <button onClick={generateJoke}>Get a new joke <span role="img" aria-label="emoji">😄</span></button>
    </div>
  );
}

export default App;

