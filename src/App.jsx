// Imports
import './App.css'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'

// Declarations
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/pokedex' element={<Dashboard/>} />
          <Route path='*' element={<Navigate to='/login'/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
