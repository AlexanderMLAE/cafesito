// Imports

import './App.css'
import Login from './components/Login'
import Quotes from './components/Quotes'
import Dashboard from './components/Dashboard'
import { useRef, useEffect, useState } from "react"
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Declarations

const INITIAL_CENTER = [
  139.68974,
  35.69812
]

const INITIAL_ZOOM = 7.96

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  const [center, setCenter] = useState(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFuZGVyLW1sYWUiLCJhIjoiY21sMms0c3ZlMGtkbTNkb20wZGJsajBwaCJ9.i-X4cyxRbNJn5Y5gEnpRIQ'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
    });

    mapRef.current.on('move', () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapRef.current.getCenter()
      const mapZoom = mapRef.current.getZoom()

      // update state
      setCenter([mapCenter.lng, mapCenter.lat])
      setZoom(mapZoom)
    })

    return () => {
      mapRef.current.remove()
    }
  }, [])

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM
    })
  }

  return (
    <>
      <h1>Hello Ipsum!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, ex id necessitatibus similique corporis ut dolor explicabo quam maxime itaque!</p>
      
      <div className="sidebar">
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
      </div>
      <button className='reset-button' onClick={handleButtonClick}>
        Reset
      </button>
      <div id='map-container' ref={mapContainerRef} />
      
      <Dashboard />
    </>
  )
}

export default App
