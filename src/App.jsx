import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    </div>   
  )
}

export default App
