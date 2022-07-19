import mysql from "mysql2";


// dados para conexão com banco de dados serverless
const host = 'r0e93010lf0s.us-east-3.psdb.cloud';
const username = Buffer.from('cndwNXR4dHZzNzY1', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X19iUHJnOVFQMXphMWJvZXU2WlVTNFN1a3JaSEZlM25GWGtmek00eVl5bGc=', 'base64').toString('ascii');

// configura os parametros de conexão
var mysqlConnection = mysql.createConnection({
    host: host,
    user: username,
    password: password,
    port: 3306,
    database: 'hercules8',
    ssl: {}
})

export default async function handler(req, res) {
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

const getClube = async (req, res) => {
	const { id } = req.query;
	const [result] = await pool.query("SELECT * FROM clube WHERE id = ?", [id]);
	res.status(200).json(result[0]);
};

const deleteClube = async (req, res) => {
	try {
		const { id } = req.query;
		await pool.query("DELETE FROM clube WHERE id = ?", [id]);
		res.status(204).json();
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

const updateClube = async (req, res) => {
    res.send('Clube atualizado com sucesso');
}
