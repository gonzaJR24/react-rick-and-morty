import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [character, setcharacter] = useState([]);
  useEffect(() => {
    (async()=>{
      const request=(await fetch("https://rickandmortyapi.com/api/character")
        .then(res=>res.json()))

        setcharacter(request.results)
      })()
  
    }, []);
    
    return (
      <>
        <div className="card-container">
          {character.map(el=>{
            return(
              <div key={el.id} className="card">
                <div className="title">
                  <h1>{el.name}</h1>
                </div>

                <h3>{el.status}</h3>
                <img src={el.image} alt="" />
              </div>
            )}
          )}  
      </div>
      </>
  );
}

export default App;

