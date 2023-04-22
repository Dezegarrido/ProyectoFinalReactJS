import './App.css'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './components/CartContext'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>}/>
          <Route path='/product/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/category/:category' element= {<ItemListContainer/>}/>
          <Route path='/cart' element= {<Cart/>}/>
        </Routes> 
        </CartProvider>
      </BrowserRouter>
    </>   
  )
}

export default App
