import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReceitaDetalhes = () => {
    const { id } = useParams();
    const [receita, setReceita] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/receitas/${id}`)
            .then(res => setReceita(res.data))
            .catch(err => console.error("Erro ao carregar receita:", err));
    }, [id]);

    if (!receita) return <p className="text-center mt-4">Carregando...</p>;

    return (
        <div className="container mt-4">
            <h1 className="text-center">{receita.titulo}</h1>
            <p className="text-center text-muted">{receita.subtitulo}</p>

            <section className="my-4">
                <h3>História</h3>
                <p>{receita.historia}</p>
            </section>

            <section className="my-4">
                <h3>Ingredientes</h3>
                <ul className="list-group">
                    {receita.ingredientes.map((ingrediente, index) => (
                        <li key={index} className="list-group-item">{ingrediente}</li>
                    ))}
                </ul>
            </section>

            <section className="my-4">
                <h3>Modo de Preparo</h3>
                <p>{receita.modo_preparo}</p>
            </section>

            <button className="btn btn-primary mt-3" onClick={() => window.history.back()}>
                Voltar
            </button>
        </div>
    );
};

export default ReceitaDetalhes;