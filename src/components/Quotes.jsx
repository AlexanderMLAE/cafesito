/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react"

function Quotes(){
    const url = 'https://dummyjson.com/quotes'
    // HOOKS
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)

    const getData=()=>{
        return fetch(url)
        .then(res => res.json())
        .then(console.log);
    }

    
    
    useEffect(()=>{
        getData()
    },[])

    return(
        <>
        <h2>Frases Listados</h2>
        </>
    )
}

export default Quotes