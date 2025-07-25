
import './App.css'


function App() {
 
let imageUrl="https://images.unsplash.com/photo-1734640113825-24dd7c056052?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
   <ShowImg name="satyam home" imageUrl={imageUrl} />

    </>
  )
}

// function ShowImg(props){
//   return(
//     <div>
//       {/* <h1>hlo</h1> */}
//       <img src={props.imageUrl} alt="" /> 
//       <p>{props.name}</p>
//     </div>
//   )
// }

// destructuring
function ShowImg({name , imageUrl}){
  return(
    <div>
      {/* <h1>hlo</h1> */}
      <img src={imageUrl} alt="" /> 
      <p>{name}</p>
    </div>
  )
}


export default App;
