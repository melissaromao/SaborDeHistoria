import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReceitaForms from "./components/ReceitaForms";
import ReceitaLista from "./components/ReceitaLista";
import ReceitaDetalhes from "./components/ReceitaDetalhes"; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/cadastrar" element={<ReceitaForms />} />
          <Route path="/receitas" element={<ReceitaLista />} />
          <Route path="/receita/:id" element={<ReceitaDetalhes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;