const prisma = require('../../config/db');


module.exports = (req, res) => {
	switch (req.method) {
		case "POST": {
			return postJogador(req, res);
		}
		case "GET": {
			return getJogadores(req, res);
		}
	}
}

module.exports = {
    get: (req, res) => {
		prisma.jogador.findMany()
        .then((jogadores) => res.send(jogadores))
        .catch((error) => res.send("Error: " + error.message))
    },
    post: (req, res) => {
		// TODO: insert
		res.send('Jogador salvo com sucesso');
    }
}
