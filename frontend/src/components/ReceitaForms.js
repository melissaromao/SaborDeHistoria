import { useState } from "react";
import axios from "axios";

const ReceitaForms = () => {
  const [receita, setReceita] = useState({
    titulo: "", subtitulo: "", historia: "", ingredientes: "", modo_preparo: ""
  });

  const handleChange = (e) => {
    setReceita({
      ...receita,
      [e.target.name]: e.target.name === "ingredientes" ? e.target.value.split(",") : e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/receitas", receita);
    alert("Receita cadastrada!");
  };

  return (
    <form className="container mt-4 p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input className="form-control" name="titulo" placeholder="Título" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <input className="form-control" name="subtitulo" placeholder="Subtítulo" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <textarea className="form-control" name="historia" placeholder="História" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <textarea className="form-control" name="ingredientes" placeholder="Ingredientes" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <textarea className="form-control" name="modo_preparo" placeholder="Modo de preparo" onChange={handleChange} />
      </div>
      <button className="btn btn-primary w-100" type="submit">Salvar Receita</button>
    </form>);
};

export default ReceitaForms;