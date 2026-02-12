import axios from "axios";
import Pokedex from "../pages/Pokedex";
import { useEffect, useState } from "react";
function Dashboard() {
    const url = "https://dummyjson.com/quotes";
    // HOOKS
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    // INVOCAR EL SERVICIO
    const getQuotes = async () => {
        try {
            const result = await axios.get(url);
            console.log(result.data.quotes);
            setQuotes(result.data.quotes);
            setLoading(false);
        } catch (error) {
            console.error("Error al solicitar los datos", error);
            setLoading(true);
        }
    };
    useEffect(() => {
        getQuotes();
    }, []);

    return (
        <>
            <div class="flex h-screen text-black border-2 border-white">
                <div class="hidden md:flex flex-col w-64 bg-gray-800">
                    <div class="flex items-center justify-center h-16 bg-[#063847]">
                        <span class="text-black font-bold uppercase">
                            <img src="src/assets/charmander.gif" alt="animated charmander" />
                        </span>
                    </div>
                    <div class="flex flex-col flex-1 overflow-y-auto text-black">
                        <nav class="flex-1 px-2 py-4 bg-[#063847]">
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 hover:bg-[#084152]"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 mt-2 hover:bg-[#084152]"
                            >
                                Pokemones
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 mt-2 hover:bg-[#084152]"
                            >
                                Mapa
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 mt-2 hover:bg-[#084152]"
                            >
                                Configuracion
                            </a>
                        </nav>
                    </div>
                </div>

                <div class="flex flex-col flex-1 overflow-y-auto bg-[#084152] ">
                    <div class="p-4">
                        <div className="grid grid-cols-3 gap-20 mb-25 rounded-md p-3 bg-[#cd5241]">
                            <div className="rounded-md bg-[#eede7b] text-black font-bold drop-shadow-xl/50">
                                <h1 className="text-5xl">30</h1>
                                Capturados
                            </div>
                            <div className="rounded-md bg-[#eede7b] text-black font-bold drop-shadow-xl/50">
                                <h1 className="text-5xl font-bold">10</h1>
                                Liberados
                            </div>
                            <div className="rounded-md bg-[#eede7b] text-black font-bold drop-shadow-xl/50">
                                <h1 className="text-5xl font-bold">5</h1>
                                Categorias
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 rounded-md bg-[#ee8329] p-5">
                                <div className="rounded-md bg-[#eede7b] text-black font-bold drop-shadow-xl/50">
                                        <Pokedex></Pokedex>
                                </div>
                                <div className="rounded-md bg-[#eede7b] text-black font-bold drop-shadow-xl/50">
                                    <h1>Mapa</h1>
                                    <img src="src/assets/kanto.png" alt="mapa de kanto" className="p-5" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
