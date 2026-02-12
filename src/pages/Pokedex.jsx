import { useEffect, useState } from "react"
import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Pokedex() {
    const [search, setSearch] = useState(''); // Busqueda
    const [pokemonFound, setPokemonFound] = useState(null); // Lista de pokemones encontrados
    const [searchError, setSearchError] = useState(false); // Error de busqueda
    const [myPokemon, setMyPokemon] = useState([]); // Mis pokemones en supabase

    const navigate = useNavigate();
    const trainer = localStorage.getItem('trainer_current');

    useEffect(() => {
        if (!trainer) navigate('/');
        //loadMyPokemon();
        
    },[]);

    // PokeApi
    const searchPokemon = async (e) => {
        e.preventDefault();
        setSearchError(false);
        setPokemonFound(null);

        if (!search) return;

        try {
            const sanitizedName = search.trim();
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${sanitizedName}`);
            
            setPokemonFound({
                pokemon_name: response.data.name,
                pokemon_image: response.data.sprites.front_default,
                pokemon_type: response.data.types[0].type.name,
                pokemon_id: response.data.id
            });
        } catch (error) {
            console.error("Pokemon no encontrado:", error);
            setSearchError(true);
        }
    };


        return (
            <>
            <h1 className="text-black text-2xl font-bold pb-8">Bienvenido {trainer}</h1>
            <div className="text-black">
            <h3>Buscador de pokemones</h3>
            <form onSubmit={searchPokemon}>
                <input className="rounded-md text-black"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Blaziken"
                />
                <button type="submit">Buscar</button>
            </form>
            {/* Resultado de la consulta de la API */}
            {searchError && <p className="error-msg">Pokemon no encontrado </p>}

            {pokemonFound && (
                <div className="pokemon-card new-find">
                    <img src={pokemonFound.pokemon_image} alt="sprite" />
                    <h3>{pokemonFound.pokemon_name.toUpperCase()}</h3>
                    <p>Tipo: {pokemonFound.pokemon_type.toUpperCase()}</p>
                </div>
            )}
            </div>
            </>
        )

}

export default Pokedex