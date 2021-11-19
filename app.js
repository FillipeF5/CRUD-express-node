const express = require("express");
const app = express();
app.use(express.json());

const paes =[
    {
        nome: "Pao",
        peco: 2
    }
]

// CREATE
app.post('/paes', (req, res) => {
    const { nome, preco } = req.body;
    paes.push({ nome, preco });
    res.json(paes);
});

//READ
app.get('/paes', (req,res) =>{
    res.json(paes);
});

//ATUALIZANDO
app.put("/paes/:index", (req, res) => {
    const { index } = req.params;
    const { nome, preco } = req.body;
    paes[index] = ({ nome, preco });
    
    res.json(paes)
})

// DELETANDO
app.delete('/paes/:index', (req, res) => {
    const { index } = req.params;
    paes.splice(index, 1);
    
    return res.json({ message: "Delete complete" });
});



// SERVIDOR RODANDO
app.listen(3000,() =>
    console.log("Server running...")
);