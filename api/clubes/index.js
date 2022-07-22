const prisma = require('../../config/db');


module.exports = (req, res) => {
	switch (req.method) {
		case "POST": {
			return postClube(req, res);
		}
		case "GET": {
			return getClubes(req, res);
		}
	}
}

module.exports = {
    get: (req, res) => { 
		prisma.clube.findMany()
		.then((clubes) => res.send(clubes))
		.catch((error) => res.send("Error: " + error.message))			
    },
    post: (req, res) => {
		// TODO: insert
		res.send('Clube salvo com sucesso');        
    }
}
