import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/PageNotFound'
import { ContextProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'


function App() {

  return (
    <ChakraProvider>
      <ContextProvider>
       <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path='/' element={<ItemListContainer title='Tienda de Cafe'/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer title='Tienda de Cafe'/>}/>
          <Route path='/producto/:productoId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ChakraProvider>
  )
}
export default App
