const prisma = require('../../config/db');


module.exports = (req, res) => {
	switch (req.method) {
		case "GET": {
			return getClube(req, res);
		}
		case "DELETE": {
			return deleteClube(req, res);
		}
		case "PUT": {
			return updateClube(req, res);
		}
	}
}

module.exports = {
    get: (req, res) => { 
		const { id } = req.params;

		prisma.clube.findUnique({ where: { id: Number(id) }, include: { jogadores: true } })
		.then((clube) => res.send(clube))
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
