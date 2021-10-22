
import mysql from "mysql2";
import express from "express";


var app = express();
const port = 3000;

// configura os parametros de conexão
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'h8'
});

// conecta ao banco de dados
mysqlConnection.connect(
    err => {
        if (!err) {
            console.log("DB connection succeeded!");
        } else {
            console.log("DB connection failed!\n Error: " + JSON.stringify(err, undefined, 2));
        }
    }
);

// configuring port for Express server
app.listen(port, () => console.log('Express server is running at port ' + port));



// recupera o cadastro do jogador
app.get('/recuperarJogador/:code', (req, res) => {
    mysqlConnection.query('SELECT * FROM jogador WHERE id = ?', [req.params.code], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
});

// lista todos os jogadores
app.get('/listarJogadores', (req, res) => {
    mysqlConnection.query('SELECT * FROM jogador', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
});

// lista todos os clubes
app.get('/listarClubes', (req, res) => {
    mysqlConnection.query('SELECT * FROM clube', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
});
