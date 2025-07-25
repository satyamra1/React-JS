import { useState } from 'react'
import './App.css'

const App=()=>{
  let[todo , settodos] = useState([{title:"cricket" , desc : "play cricket"},
    {title: "badminton" , desc : "play badminton"}
  ])

  return (
    <div>
      {todos.map((Todo)=><Todo title={todos.title}desc={todos.desc}></Todo>
      )}
      
    </div>
  )
}
function Todo(title,desc){
  return(
    <div>
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  )
}

export default App
//each child in a list