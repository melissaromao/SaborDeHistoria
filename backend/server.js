const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Banco de dados conectado"))
    .catch(err => console.error("Erro ao conectar ao banco:", err));

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));

const usuarioRoutes = require("./routes/usuarioRoutes");
const receitaRoutes = require("./routes/receitaRoutes");

app.use("/usuarios", usuarioRoutes);
app.use("/receitas", receitaRoutes);