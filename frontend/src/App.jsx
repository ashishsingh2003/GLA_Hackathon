import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navs'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Addmem from './Components/Addmem'
import Edit from './Components/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
        <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dash/:id/:user" element={<Dashboard/>}></Route>
        <Route path="/addmem/:id" element={<Addmem/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
        </Routes>
    </div>
  )
}

export default App
