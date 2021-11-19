const express = require("express");
const { uuid } = require('uuidv4');
const app = express();
app.use(express.json());

const paes =[{ }]

//CREATE
app.post('/paes', (req, res) => {
    const { nome, preco, id } = req.body;
    paes.push({ nome, preco, id: uuid() });
    res.json(paes);
});

//READ
app.get('/paes', (req,res) =>{
    res.json(paes);
});

//UPDATE
app.put("/paes/:index", (req, res) => {
    const { index } = req.params;
    const { nome, preco, id } = req.body;
    paes[index] = ({ nome, preco, id: uuid() });
    
    res.json(paes)
});

//DELETE
app.delete('/paes/:index', (req, res) => {
    const { index } = req.params;
    paes.splice(index, 1);
    
    return res.json({ message: "Delete complete" });
});



// SERVIDOR RODANDO
app.listen(3000,() =>
    console.log("Server running...")
);