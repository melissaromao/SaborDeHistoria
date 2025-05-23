const express = require("express");
const { createReceita, getReceitas, getReceitaById, updateReceita, deleteReceita } = require("../controllers/ReceitaController");

const router = express.Router();

router.post("/", createReceita);      
router.get("/", getReceitas);         
router.get("/:id", getReceitaById);   
router.put("/:id", updateReceita);    
router.delete("/:id", deleteReceita); 

module.exports = router;