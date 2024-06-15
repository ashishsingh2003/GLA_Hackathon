import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navs'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
        <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dash/:id" element={<Dashboard/>}></Route>
        </Routes>
    </div>
  )
}

export default App
