const prisma = require('../../config/db');


module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "POST": {
				res.send('Clube salvo com sucesso')
			}
			case "GET": {
				res.send('Lista de clubes')
			}
		}
	},
    get: (req, res) => { 
		prisma.clube.findMany()
		.then((clubes) => res.send(clubes))
		.catch((error) => res.send("Error: " + error.message))
    },
    post: (req, res) => {
		// TODO: insert
		res.send('Clube salvo com sucesso')
    }
}
