const prisma = require('../../config/db');


function deleteClube(req, res) {
	return null;
}

function updateClube(req, res) {
	return null;
}

module.exports = {
	default: (req, res) => {
		res.send(`REQ. METHOD=${req.method} REQ. QUERY=${JSON.stringify(req.query)}`);

		/*
		switch (req.method) {
			case "GET": {
				res.send('Dados recuperados. Registro id=' + id)
			}
			case "DELETE": {
				res.send('Registro id=' + id + ' excluido com sucesso')
			}
			case "PUT": {
				res.send('Registro id=' + id + 'atualizado com sucesso')
			}
		}
		*/
	},
    get: (req, res) => { 
		const { id } = req.params;

		prisma.clube.findUnique({ where: { id: Number(id) }, include: { jogadores: true } })
		.then((clube) => res.send(clube))
		.catch((error) => res.send("Error: " + error.message))	
    },
    del: (req, res) => {
		const { id } = req.params;

		// TODO : delete
		res.send(`Registro id=${id} excluido`)
    },
    put: (req, res) => {
		const { id } = req.params;

		// TODO : update
		res.send(`Registro id=${id} atualizado`)
    }
}
