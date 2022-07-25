const prisma = require('../../config/db');


function getJogador(req, res) {
	const { id } = req.params || req.query;

	prisma.jogador.findUnique({ where: { id: Number(id) } })
	.then((jogador) => res.send(jogador))
	.catch((error) => res.send("Error: " + error.message))
}

function deleteJogador(req, res) {
    const { id } = req.params || req.query;

	prisma.jogador.delete({ where: { id: Number(id) } })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

function updateJogador(req, res) {
    // Serverless Database does not suport foreign keys, bug detected
    const { id } = req.params || req.query;

	prisma.jogador.update({ where: { id: Number(id) }, data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
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
