const mongoose = require("mongoose");
const Usuario = require("./Usuario");

const ReceitaSchema = new mongoose.Schema({
    titulo: String,
    subtitulo: String,
    historia: String,
    ingredientes: [String],
    modo_preparo: String,
    UsuarioId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Receita", ReceitaSchema);