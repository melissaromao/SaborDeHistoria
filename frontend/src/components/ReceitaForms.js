import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ReceitaForms = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [receita, setReceita] = useState({
    titulo: "",
    subtitulo: "",
    historia: "",
    ingredientes: "",
    modo_preparo: "",
  });

  const [sucesso, setSucesso] = useState(""); 
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/receitas/${id}`)
        .then((res) => setReceita(res.data))
        .catch((err) => console.error("Erro ao buscar receita:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setReceita({
      ...receita,
      [e.target.name]:
        e.target.name === "ingredientes"
          ? e.target.value.split(",")
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:5000/receitas/${id}`, receita);
        setSucesso("Receita atualizada com sucesso!");
      } else {
        await axios.post("http://localhost:5000/receitas", receita);
        setSucesso("Receita cadastrada com sucesso!");
      }

      setTimeout(() => {
        setSucesso("");
        navigate("/receitas");
      }, 3000);
    } catch (error) {
      console.error("Erro ao salvar receita:", error);
    }
  };

  return (
    <div className="container mt-4">
      {sucesso && (
        <div className="alert alert-success text-center" role="alert">
          {sucesso} A página será redirecionada em 3 segundos.
        </div>
      )}

      <h2 className="text-center mb-4">
        {id ? "Editar Receita" : "Minha Receita"}
      </h2>

      <form
        className="p-4 border rounded shadow-sm bg-light"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            className="form-control"
            name="titulo"
            placeholder="Ex: Bolo da Vovó"
            value={receita.titulo}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subtítulo</label>
          <input
            className="form-control"
            name="subtitulo"
            placeholder="Ex: Delícia para o café da tarde"
            value={receita.subtitulo}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">História</label>
          <textarea
            className="form-control"
            name="historia"
            placeholder="Conte a história por trás da receita..."
            value={receita.historia}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredientes</label>
          <textarea
            className="form-control"
            name="ingredientes"
            placeholder="Ex: 2 xícaras de farinha, 1 colher de fermento..."
            value={receita.ingredientes}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Modo de Preparo</label>
          <textarea
            className="form-control"
            name="modo_preparo"
            placeholder="Descreva passo a passo o preparo..."
            value={receita.modo_preparo}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success w-100" type="submit">
          {id ? "Atualizar Receita" : "Salvar Receita"}
        </button>
      </form>
    </div>
  );
};

export default ReceitaForms;  