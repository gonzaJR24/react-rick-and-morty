import './App.css';
import {useEffect,useState} from "react"

function App() {
  const [joke,setJoke]=useState("")
  const url="https://api.chucknorris.io/jokes/random"

const next=()=>{
  const request=fetch(url)
  request
    .then(res=>res.json())
    .then(res=>setJoke(res.value))
    .catch(()=>console.log("error"))
}

  useEffect(()=>{
   next()
  },[])

  return (
    <>
    <h1>{joke}</h1>
    <button onClick={next}>next joke</button>
    </>
  );
}

export default App;
