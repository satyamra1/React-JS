
import './App.css'
import Card from './Card'
import Counter from './Counter'
import LikeButton from './LikeButton'

function App() {
 
  return (
    <>
     <Counter />
      
    <div className="slide">
    <div className="product">
    <Card Title="phone" Description="motorola 5g" idx={0} />
    <LikeButton />
    </div>
    <div className="product">
    <Card Title="phone" Description="motorola 5g" idx={1} />
    <LikeButton />
    </div>
    <div className="product">
    <Card Title="phone" Description="motorola 5g" idx={2} />
    <LikeButton />
    </div>
    </div>

    
     
    </>
  )
}

export default App
