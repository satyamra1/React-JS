import { useState } from "react";

function Person() {

    
    let [name, newName]= useState("Satyam");

    function change(){


         newName("Anonumous");

         newName=name;

    }
    
      return (
        <>
        
        {name}
        <br />
        <button onClick={change}>Logout</button>
      
        </>
      )
    }
    

export default Person
