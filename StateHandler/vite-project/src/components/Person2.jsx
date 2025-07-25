import React, { useState } from 'react'

function Count() {
   let [count , setCount] = useState(0);
   function handleClick(){
    Cout();
  
    function Cout(){

        setCount(count+1);//1
        setCount(count+1);//1
        setCount(count+1);//1


        //call back 
        setCount((count)=> count+1);//1
        setCount((count)=> count+1);//1
        setCount((count)=> count+1);//1

    }
        
  
    //this is called half batching - means a lil portion of batching , isme 3 ki jgh ek baar rerendering hora h. if there are multiple setstate because of which componentns renrender , but the component rerenderes once.
   }
  return (

    <div onClick={handleClick}>
      Count : {count}
    </div>
  )
}

export default Count;