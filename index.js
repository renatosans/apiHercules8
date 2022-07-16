
import mysql from 'mysql2';
import express from 'express';
import { PrismaClient } from '@prisma/client'


var app = express();
const port = 3000;

const prisma = new PrismaClient();


// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));


// recupera o cadastro do jogador
app.get('/recuperarJogador/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM jogador WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
})

// lista todos os jogadores
app.get('/listarJogadores', (req, res) => {
    mysqlConnection.query('SELECT * FROM jogador', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
})
