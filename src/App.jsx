import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist'
import PlaceOrder from './pages/PlaceOrder'
import Signup from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/signup" element = {<Signup/>} />
      </Routes>
    </>
  )
}

export default App