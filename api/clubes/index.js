const prisma = require('../../config/db');


function getClubes(req, res) {
	prisma.clube.findMany()
	.then((clubes) => res.send(clubes))
	.catch((error) => res.send("Error: " + error.message))
}

function insertClube(req, res) {
	// const { pais, nome, email, telefone, fax, imagem } = req.body;

	prisma.clube.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "POST": return insertClube(req, res)
			case "GET": return getClubes(req, res)
		}
	},
    get: (req, res) => getClubes(req, res),
    post: (req, res) => insertClube(req, res)
}
