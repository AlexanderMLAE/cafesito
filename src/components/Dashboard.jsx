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
            <div class="flex h-screen bg-gray-300 border border-red-500 text-white">
                <div class="hidden md:flex flex-col w-64 bg-gray-800 border border-blue-500">
                    <div class="flex items-center justify-center h-16 bg-gray-800 border border-yellow-500">
                        <span class="text-white font-bold uppercase">
                            <img src="src/assets/charmander.gif" alt="animated charmander" />
                        </span>
                    </div>
                    <div class="flex flex-col flex-1 overflow-y-auto border border-green-500">
                        <nav class="flex-1 px-2 py-4 bg-gray-800 border border-white">
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                            >
                                Pokemones
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                            >
                                Mapa
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                            >
                                Configuracion
                            </a>
                        </nav>
                    </div>
                </div>

                <div class="flex flex-col flex-1 overflow-y-auto border-5 bg-[#084152] border-black">
                    <div class="p-4">
                        <div className="grid grid-cols-3 gap-20 pb-25 pl-5 pr-5">
                            <div className="rounded-md bg-[#eede7b] text-black font-bold">
                                <h1 className="text-5xl">30</h1>
                                Capturados
                            </div>
                            <div className="rounded-md bg-[#eede7b] text-black font-bold">
                                <h1 className="text-5xl font-bold">10</h1>
                                Liberados
                            </div>
                            <div className="rounded-md bg-[#eede7b] text-black font-bold">
                                <h1 className="text-5xl font-bold">5</h1>
                                Categorias
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                                <div className="border border-black">
                                        <Pokedex></Pokedex>
                                </div>
                                <div className="border border-black">
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
