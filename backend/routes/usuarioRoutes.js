const express = require("express");
const Usuario = require("../models/Usuario");

const router = express.Router();

router.post("/", async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
});

module.exports = router;