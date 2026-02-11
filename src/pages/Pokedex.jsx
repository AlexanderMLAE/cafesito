import { useEffect, useState } from "react"
import Dashboard from "../components/Dashboard";

function Pokedex() {
    
    const [trainerName, setTrainerName] = useState('');

    useEffect(() => {
        const trainer = localStorage.getItem('trainer_current');
        if (trainer) {
            setTrainerName(trainer);
        }
    },[]);

    return (
        <>
        <h1 id="welcome">Bienvenido {trainerName}</h1>
        <Dashboard></Dashboard>
        </>
    )

}

export default Pokedex