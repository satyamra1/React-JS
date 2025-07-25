import { useState } from "react"

export default function App(){

  let [incCounter, setincCounter]=useState(0)


  function Counter(){
    incCounter+=1;
   setincCounter(incCounter);
  }
 
  return(
    <div>
      <h3>No of Counts= {incCounter}</h3>
      <button onClick={Counter}>Inc Count</button>
    </div>
  )
}