import { useState } from "react";

const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8097/usuarios/registrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert("Registro exitoso");
        } else {
            alert("Error en el registro");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Registro;
