const prisma = require('../../config/db');


function getJogador(req, res) {
	const { id } = req.params;

	prisma.jogador.findUnique({ where: { id: Number(id) } })
	.then((jogador) => res.send(jogador))
	.catch((error) => res.send("Error: " + error.message))
}

function deleteJogador(req, res) {
    const { id } = req.params;

	prisma.jogador.delete({ where: { id: Number(id) } })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

function updateJogador(req, res) {
    // Serverless Database does not suport foreign keys, bug detected
    return null;
}

module.exports = {
	default: (req, res) => {
		req.params.id = req.query.id;

		switch (req.method) {
			case "GET": return getJogador(req, res)
			case "DELETE": return deleteJogador(req, res)
			case "PUT": return updateJogador(req, res)
		}
	},
    get: (req, res) => getJogador(req, res),
    del: (req, res) => deleteJogador(req, res),
    put: (req, res) => updateJogador(req, res),
}
