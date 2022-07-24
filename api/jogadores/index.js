const prisma = require('../../config/db');


function getJogadores(req, res) {
	prisma.jogador.findMany()
	.then((jogadores) => res.send(jogadores))
	.catch((error) => res.send("Error: " + error.message))
}

function insertJogador(req, res) {
	// const { id, clubeId, nome, email, dataContratacao } = req.body;

	prisma.jogador.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "POST": return insertJogador(req, res)
			case "GET": return getJogadores(req, res)
		}
	},
    get: (req, res) => getJogadores(req, res),
    post: (req, res) => insertJogador(req, res)
}
