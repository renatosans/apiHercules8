const prisma = require('../../config/db');


function getClube(req, res) {
	const { id } = req.params || req.query;

	prisma.clube.findUnique({ where: { id: Number(id) }, include: { jogadores: true } })
	.then((clube) => res.send(clube))
	.catch((error) => res.send("Error: " + error.message))
}

function deleteClube(req, res) {
	const { id } = req.params || req.query;

	prisma.clube.delete({ where: { id: Number(id) } })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

function updateClube(req, res) {
	// Serverless Database does not suport foreign keys, bug detected
	const { id } = req.params || req.query;

	prisma.clube.update({ where: { id: Number(id) }, data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getClube(req, res)
			case "DELETE": return deleteClube(req, res)
			case "PUT": return updateClube(req, res)
		}
	},
    get: (req, res) => getClube(req, res),
    del: (req, res) => deleteClube(req, res),
    put: (req, res) => updateClube(req, res),
}
