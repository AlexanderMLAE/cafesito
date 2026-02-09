import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [user, setUser] = useState();
    const Navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (user.trim().length > 2) {
            localStorage.setItem("trainer_current", user);
            navigate("/pokedex");
        } else {
            alert('El nombre del entrenador debe tener al menos 3 letras');
        }
    };
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Sistema de Gestión de Pokemones</h1>
                <p>Identificate, entrenador</p>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Tu nombre (ejemplo: Red)"
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                    <button type="submit">Comenzar a capturar pokemones</button>
                </form>
            </div>
        </div>
    )
}
