// Imports
import './App.css'
import Dashboard from './components/Dashboard'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from './components/Map'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// Declarations
function App() {

  return (
    <>
      <h1>Hello Ipsum!</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/pokedex' element={<Pokedex/>} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, ex id necessitatibus similique corporis ut dolor explicabo quam maxime itaque!</p>
      <Map/>
      <Dashboard />
    </>
  )
}

export default App
