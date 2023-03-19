import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import { CartProvider } from 'react-use-cart'

const AppRoute = () => {
  return (
    <BrowserRouter>
        <CartProvider>
        <Header />
        <Container>
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/products' element={<Products />} ></Route>
            <Route path='/cart' element={<Cart />} ></Route>
        </Routes>
        </Container>
        <Footer />
        </CartProvider>
    </BrowserRouter>
  )
}

export default AppRoute