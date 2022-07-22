const prisma = require('../../config/db');


module.exports = {
	default: (req, res) => {
		const { id } = req.query;

		switch (req.method) {
			case "GET": {
				res.send(`Registro ${id} recuperado`)
			}
			case "DELETE": {
				res.send(`Registro ${id} excluido com sucesso`)
			}
			case "PUT": {
				res.send(`Registro ${id} atualizado com sucesso`)
			}
		}
	},
    get: (req, res) => { 
		const { id } = req.query;

		prisma.clube.findUnique({ where: { id: Number(id) }, include: { jogadores: true } })
		.then((clube) => res.send(clube))
		.catch((error) => res.send("Error: " + error.message))	
    },
    del: (req, res) => {
		const { id } = req.query;

		// TODO : delete
		res.send(`Registro ${id} excluido no BD`)
    },
    put: (req, res) => {
		const { id } = req.query;

		// TODO : update
		res.send(`Registro ${id} atualizado no BD`)
    },
}
