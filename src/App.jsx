// Imports
import './App.css'
import Dashboard from './components/Dashboard'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from './components/Map'
// Declarations
function App() {

  return (
    <>
      <h1>Hello Ipsum!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, ex id necessitatibus similique corporis ut dolor explicabo quam maxime itaque!</p>
      <Map/>
      <Dashboard />
    </>
  )
}

export default App
