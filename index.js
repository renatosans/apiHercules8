const path = require('path');
const express = require('express');
const prisma = require('./config/db');
// const { createRouter } = require('express-file-routing');
const { nextApi, nextRouter } = require('express-next-api');


const port = 3000;
const app = express();
const staticRoot = './Public';
// const currentDir = path.resolve(path.dirname(''));
// const apiDirectory = path.join(currentDir, "api");

app.use("/", express.static(staticRoot));
// createRouter(app, { directory: apiDirectory, additionalMethods: null } )
app.use(nextApi({ base: '/api', directory: 'api', options: {caseSensitive: false} }))

// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));

/*
app.get('/listarJogadores', (req, res) => {
    prisma.jogador.findMany()
        .then((jogadores) => res.send(jogadores))
        .catch((error) => res.send("Error: " + error.message))
})

app.get('/recuperarJogador/:id', (req, res) => {
    prisma.jogador.findUnique({ where: { id: Number(req.params.id) } })
    .then((jogador) => res.send(jogador))
    .catch((error) => res.send("Error: " + error.message))
})

app.get('/listarClubes', (req, res) => {
    prisma.clube.findMany()
    .then((clubes) => res.send(clubes))
    .catch((error) => res.send("Error: " + error.message))
})

app.get('/recuperarClube/:id', (req, res) => {
    prisma.clube.findUnique({ where: { id: Number(req.params.id) }, include: { jogadores: true } })
    .then((clube) => res.send(clube))
    .catch((error) => res.send("Error: " + error.message))
})
*/
