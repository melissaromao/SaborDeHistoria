import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReceitaLista = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/receitas")
      .then((res) => setReceitas(res.data))
      .catch((err) => console.error("Erro ao buscar receitas:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/receitas/${id}`);
      setReceitas(receitas.filter((receita) => receita._id !== id));
    } catch (error) {
      console.error("Erro ao excluir receita:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {receitas.map((receita) => (
          <div className="col-md-4 mb-4" key={receita._id}>
            <div className="card text-dark">
              <div className="card-body">
                <h2 className="card-title">{receita.titulo}</h2>
                <p className="card-text">{receita.subtitulo}</p>

                <div className="d-flex justify-content-between mt-3">
                  <Link
                    to={`/editar/${receita._id}`}
                    className="btn btn-warning text-white"
                  >
                    <strong>Editar</strong>
                  </Link>
                  <button
                    onClick={() => handleDelete(receita._id)}
                    className="btn btn-danger"
                  >
                    <strong>Excluir</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceitaLista;
