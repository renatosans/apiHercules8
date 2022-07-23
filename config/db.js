const { PrismaClient } = require('@prisma/client');


const host     = 'r0e93010lf0s.us-east-3.psdb.cloud'
const username = '7cri28pmgx9o'
const password = 'pscale_pw_CEOO5yFQTdRY1phP4h0uKkDn8TDj_KMG74VdzZzz0Co'
const port     = 3306
const database = 'hercules8'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/h8"
const url = `mysql://${username}:${password}@${host}:${port}/${database}?sslaccept=strict&sslmode=require`;
const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
