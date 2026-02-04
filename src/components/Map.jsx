// Imports

import { useRef, useEffect, useState } from "react"
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Declarations

const INITIAL_CENTER = [-86.84692, 21.04851]

const INITIAL_ZOOM = 10

const Map = () => {

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
        new mapboxgl.Marker({ color: 'turquoise' }) // UT
            .setLngLat([-86.84692, 21.04851])
            .addTo(mapRef.current)

        new mapboxgl.Marker({ color: 'black' }) // Unicaribe
            .setLngLat([-86.82379, 21.20075])
            .addTo(mapRef.current)

        new mapboxgl.Marker({ color: 'orange' }) // UPQROO
            .setLngLat([-86.90669, 21.18105])
            .addTo(mapRef.current)

        new mapboxgl.Marker({ color: 'green' }) // UQROO
            .setLngLat([-86.92745, 21.16124])
            .addTo(mapRef.current)

        new mapboxgl.Marker({ color: 'blue' }) // TECNOLOGICO
            .setLngLat([-86.83540119815054, 21.13848011409221])
            .addTo(mapRef.current)
        
        new mapboxgl.Marker({ color: 'teal' }) // Yo
            .setLngLat([-86.84602, 21.04591])
            .addTo(mapRef.current)

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
            <div className="sidebar">
                Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
            </div>
            <button className='reset-button' onClick={handleButtonClick}>
                Reset
            </button>
            <div id='map-container' ref={mapContainerRef} />
        </>
    )
}

export default Map 