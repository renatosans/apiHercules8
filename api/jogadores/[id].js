const prisma = require('../../config/db');


module.exports = (req, res) => {
	switch (req.method) {
		case "GET": {
			return getJogador(req, res);
		}
		case "DELETE": {
			return deleteJogador(req, res);
		}
		case "PUT": {
			return updateJogador(req, res);
		}
	}
}

module.exports = {
    get: (req, res) => { 
		const { id } = req.params;

		prisma.jogador.findUnique({ where: { id: Number(req.params.id) } })
		.then((jogador) => res.send(jogador))
		.catch((error) => res.send("Error: " + error.message))	
    },
    del: (req, res) => {
		// TODO : delete
		res.send('Registro excluido com sucesso');
    },
    put: (req, res) => {
		// TODO : update
		res.send('Registro atualizado com sucesso');
    },
}
