const path = require('path');
const express = require('express');
const { router } = require('express-file-routing');
const { PrismaClient } = require('@prisma/client');


const port = 3000;
const app = express();
const staticRoot = './Public';
const prisma = new PrismaClient();
const currentDir = path.resolve(path.dirname('')); 
const apiDirectory = path.join(currentDir, "api");

app.use("/", express.static(staticRoot));
app.use("/", router({ directory: apiDirectory, additionalMethods: null }))

// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));

// lista todos os jogadores
app.get('/listarJogadores', (req, res) => {
    prisma.jogador.findMany()
        .then((jogadores) => res.send(jogadores))
        .catch((error) => res.send("Error: " + error.message))
})

// recupera o cadastro do jogador
app.get('/recuperarJogador/:id', (req, res) => {
    prisma.jogador.findUnique({ where: { id: Number(req.params.id) } })
    .then((jogador) => res.send(jogador))
    .catch((error) => res.send("Error: " + error.message))
})

// lista todos os clubes
app.get('/listarClubes', (req, res) => {
    prisma.clube.findMany()
    .then((clubes) => res.send(clubes))
    .catch((error) => res.send("Error: " + error.message))
})

// recupera o cadastro do clube
app.get('/recuperarClube/:id', (req, res) => {
    prisma.clube.findUnique({ where: { id: Number(req.params.id) }, include: { jogadores: true } })
    .then((clube) => res.send(clube))
    .catch((error) => res.send("Error: " + error.message))
})
