import { createPool } from "mysql2/promise";


const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: 'p@ssw0rd',
	port: 3306,
	database: 'h8',
	// ssl: {}
})

export { pool }
