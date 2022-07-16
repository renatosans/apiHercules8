import express from 'express';
import { PrismaClient } from '@prisma/client'


const port = 3000;
const app = express();
const prisma = new PrismaClient();


// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));

// lista todos os jogadores
app.get('/listarJogadores', (req, res) => {
    prisma.jogador.findMany()
        .then((jogadores) => res.send(jogadores))
        .catch((error) => console.log("Error: " + error.message))
})

// recupera o cadastro do jogador
app.get('/recuperarJogador/:id', (req, res) => {
    prisma.jogador.findUnique({ where: { id: Number(req.params.id) } })
    .then((jogador) => res.send(jogador))
    .catch((error) => console.log("Error: " + error.message))
})

// lista todos os clubes
app.get('/listarClubes', (req, res) => {
    prisma.clube.findMany()
    .then((clubes) => res.send(clubes))
    .catch((error) => console.log("Error: " + error.message))
})

// recupera o cadastro do clube
app.get('/recuperarClube/:id', (req, res) => {
    prisma.clube.findUnique({ where: { id: Number(req.params.id) }, include: { jogadores: true } })
    .then((clube) => res.send(clube))
    .catch((error) => console.log("Error: " + error.message))
})
