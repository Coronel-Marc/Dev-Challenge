const express = require('express');
const mongoose = require ('mongoose');
const cors = require ('cors');


require("./models/Artigo");
const Artigo = mongoose.model('artigo');

const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost/jornal', {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com Mongodb realizada");
}).catch((erro) =>{
    console.log("Erro: Conexão não realizada.");
}); 

app.get("/", (req, res) =>{
    Artigo.find({}).sort({createdAt: 'desc'}).then((artigo) =>{
        return res.json(artigo);
    }).catch((erro) =>{
        return res.status(404).json({
            error: true,
            message: "Nenhum artigo encontrado!"
        })
    })
});



app.post("/artigo", (req,res) => {
    const artigo = Artigo.create(req.body,(err) =>{
        if(err) return res.status(400).json({
            error: true,
            message: "Não foi possível cadastrar o artigo no sistema. "
        });
        return res.status(200).json({
            error: false,
            message: "Artigo cadastrado com sucesso."
            
        });
    })
});


app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
