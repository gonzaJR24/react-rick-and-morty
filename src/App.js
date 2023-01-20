import './App.css';
import {useEffect,useState} from "react"

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
    const url="https://randomuser.me/api/?results=3"
    const request=fetch(url)
      request
      .then(data=>data.json())
      .then(data=>data.results.map(person=>
        setData(e=>
        [...e,<div key={person.cell} className="card">
          <div>{person.name.first} {person.name.last}</div>
          <div><img src={person.picture.large} alt="" /></div>
        </div>])
        ))
      .catch(()=>console.log("error"))
  },[])
  return (
    <>
    <div className="container">
      <div className="title">
        <h1>Empleados del mes</h1>
        <p>⭐</p>
      </div>
      <div className="data">
      {data}
      </div>
    </div>
    </>
  );
}

export default App;
