import { useState } from "react";
import axios from "axios";

const ReceitaForms = () => {
  const [receita, setReceita] = useState({
    titulo: "", subtitulo: "", historia: "", ingredientes: "", modo_preparo: ""
  });

  const handleChange = (e) => {
    setReceita({ ...receita, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/receitas", receita);
    alert("Receita cadastrada!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" placeholder="Título" onChange={handleChange} />
      <input name="subtitulo" placeholder="Subtítulo" onChange={handleChange} />
      <textarea name="historia" placeholder="História" onChange={handleChange} />
      <textarea name="ingredientes" placeholder="Ingredientes" onChange={handleChange} />
      <textarea name="modo_preparo" placeholder="Modo de preparo" onChange={handleChange} />
      <button type="submit">Salvar Receita</button>
    </form>
  );
};

export default ReceitaForms;