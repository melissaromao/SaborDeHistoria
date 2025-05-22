import { useEffect, useState } from "react";
import axios from "axios";

const ReceitaLista = () => {
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/receitas").then(res => setReceitas(res.data));
    }, []);

    return (
        <ul>
            {receitas.map((receita) => (
                <li key={receita._id}>
                    <h2>{receita.titulo}</h2>
                    <p>{receita.subtitulo}</p>
                </li>
            ))}
        </ul>
    );
};

export default ReceitaLista;