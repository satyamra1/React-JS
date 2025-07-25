import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  var data = Math.random();

  return (
    <>

    <h2>Count = {data+data+data}</h2>
      
    
      <h1>MAI HU JIYAAN</h1>
    <h3>MAI HU SABSE TAKATVAR</h3>
    <h4>MERI AWAJ H SURILI</h4>

    <Header/>
  
    <Main/>

    <Footer/>
    </>
  )
}




export default App;
