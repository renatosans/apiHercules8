const mysql = require('mysql2');


// dados para conexão com banco de dados serverless
const host = 'r0e93010lf0s.us-east-3.psdb.cloud';
const username = Buffer.from('ZHNuNnN5d2I5NWQy', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X0NmcjVaRUtZVDhDUnhmOUMzMmN0QzRVVGtqU05OYVozMURTM1ZraGh1bmc=', 'base64').toString('ascii');

// configura os parametros de conexão
var mysqlConnection = mysql.createConnection({
    host: host,
    user: username,
    password: password,
    port: 3306,
    database: 'hercules8',
    ssl: {}
})

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

const postClube = async (req, res) => {
    // TODO: insert
    res.send('Clube salvo com sucesso');
}

const getClubes = async (req, res) => {
    mysqlConnection.connect(
        err => {
            if (!err) {
                console.log("DB connection succeeded!");
            } else {
                console.log("DB connection failed!\n Error: " + JSON.stringify(err, undefined, 2));
            }
        }
    )

    mysqlConnection.query('SELECT * FROM clube', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
}
