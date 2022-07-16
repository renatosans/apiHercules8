import express from 'express';
import { PrismaClient } from '@prisma/client'


const port = 3000;
const app = express();
const prisma = new PrismaClient();


// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));

// recupera o cadastro do jogador
app.get('/recuperarJogador/:id', (req, res) => {
    prisma.jogador.findUnique({ where: { id: Number(req.params.id) }, select: { nome: true, email: true }})
    .then((jogador) => res.send(jogador))
    .catch((error) => console.log("Error: " + error.message))
})

// lista todos os jogadores
app.get('/listarJogadores', (req, res) => {
    prisma.jogador.findMany()
        .then((jogadores) => res.send(jogadores))
        .catch((error) => console.log("Error: " + error.message))
})
