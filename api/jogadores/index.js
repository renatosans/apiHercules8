const prisma = require('../../config/db');


module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "POST": {
				res.send('Jogador salvo com sucesso')
			}
			case "GET": {
				res.send('Lista de jogadores')
			}
		}
	},
    get: (req, res) => {
		prisma.jogador.findMany()
        .then((jogadores) => res.send(jogadores))
        .catch((error) => res.send("Error: " + error.message))
    },
    post: (req, res) => {
		// TODO: insert
		res.send('Jogador salvo no BD');
    }
}
