const express = require("express");
const Receita = require("../models/Receita");

const router = express.Router();

router.post("/", async (req, res) => {
    const receita = new Receita(req.body);
    await receita.save();
    res.status(201).json(receita);
});

router.get("/", async (req, res) => {
    const receitas = await Receita.find();
    res.json(receitas);
});

module.exports = router;