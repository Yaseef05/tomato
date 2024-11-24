import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import Cart from './components/pages/Cart/Cart'
import Home from './components/pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin]= useState(false);
  return (
    
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}  />:<></> }
     <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        
      </Routes>
      <Footer />

    </div>
    </>
   
  )
}

export default App
