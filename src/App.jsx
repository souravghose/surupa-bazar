import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)
  
  const [cart, setCart] = useState([]);
  const getTotalPrice = (product) => {
      const newCart = [...cart, product]
      setCart(newCart)
  };
  return (
    <>
      <Header cart={cart} getTotalPrice={getTotalPrice}></Header>
      <Shop> </Shop>
      
    </>
  )
}

export default App
