const prisma = require('../../config/db');


module.exports = {
	default: (req, res) => {
		const { id } = req.query;

		switch (req.method) {
			case "GET": {
				res.send('Dados Jogador id=' + id)
			}
			case "DELETE": {
				res.send('Jogador id=' + id + ' excluido no BD')
			}
			case "PUT": {
				res.send('Jogador id=' + id + ' atualizado no BD')
			}
		}
	},
    get: (req, res) => { 
		const { id } = req.params;

		prisma.jogador.findUnique({ where: { id: Number(id) } })
		.then((jogador) => res.send(jogador))
		.catch((error) => res.send("Error: " + error.message))	
    },
    del: (req, res) => {
		const { id } = req.params;

		// TODO : delete
		res.send(`Jogador id=${id} excluido`)
    },
    put: (req, res) => {
		const { id } = req.params;

		// TODO : update
		res.send(`Jogador id=${id} atualizado`)
    }
}
