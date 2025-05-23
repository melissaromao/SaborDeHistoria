const Receita = require("../models/Receita");

const createReceita = async (req, res) => {
    try {
        const receita = new Receita(req.body);
        await receita.save();
        res.status(201).json(receita);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar receita", error });
    }
};

const getReceitas = async (req, res) => {
    try {
        const receitas = await Receita.find();
        res.json(receitas);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar receitas", error });
    }
};

const getReceitaById = async (req, res) => {
    try {
        const receita = await Receita.findById(req.params.id);
        if (!receita) {
            return res.status(404).json({ message: "Receita não encontrada" });
        }
        res.json(receita);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar receita", error });
    }
};

const updateReceita = async (req, res) => {
    try {
        const updatedReceita = await Receita.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedReceita);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar receita", error });
    }
};

const deleteReceita = async (req, res) => {
    try {
        await Receita.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Receita deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar receita", error });
    }
};

module.exports = { createReceita, getReceitas, getReceitaById, updateReceita, deleteReceita };