import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReceitaLista = () => {
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/receitas")
            .then(res => setReceitas(res.data))
            .catch(err => console.error("Erro ao buscar receitas:", err));
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {receitas.map((receita) => (
                    <div className="col-md-4 mb-4" key={receita._id}>
                        <Link to={`/receita/${receita._id}`} className="card text-dark text-decoration-none">
                            <div className="card-body">
                                <h2 className="card-title">{receita.titulo}</h2>
                                <p className="card-text">{receita.subtitulo}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReceitaLista;