import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector } from './redux/hooks/index.'
import { decrement, increment } from './redux/slices/counter'
import { useAppDispatch } from './redux/hooks/index.'
import DemoCart from './demoCart.jsx'


function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
  
      <div>
       
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Count is {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
      <br />
      <hr />
       <DemoCart />
     
    </>
  )
}

export default App
