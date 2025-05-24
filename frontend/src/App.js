import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReceitaForms from "./components/ReceitaForms";
import ReceitaLista from "./components/ReceitaLista";
import ReceitaDetalhes from "./components/ReceitaDetalhes";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<ReceitaForms />} />
          <Route path="/editar/:id" element={<ReceitaForms />} />
          <Route path="/receitas" element={<ReceitaLista />} />
          <Route path="/receita/:id" element={<ReceitaDetalhes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;